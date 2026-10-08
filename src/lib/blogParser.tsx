import React from "react";
import { Box, Typography, Divider } from "@mui/material";

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function parseInlineMarkdown(text: string): string {
  if (!text) return "";

  const codeTokens: string[] = [];
  const linkTokens: string[] = [];

  // Helper to build anchor tag
  const buildAnchorTag = (href: string, anchorText: string, title?: string) => {
    let trimmedHref = href.trim();
    if (!trimmedHref) return anchorText;

    // Autoprefix plain www.
    if (/^www\./i.test(trimmedHref)) {
      trimmedHref = `https://${trimmedHref}`;
    }

    const isExternal = /^https?:\/\//i.test(trimmedHref) || trimmedHref.startsWith("//");
    const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
    const titleAttr = title ? ` title="${escapeHtml(title)}"` : "";

    return `<a href="${escapeHtml(trimmedHref)}"${targetAttr}${titleAttr} style="color: #EA580C; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: rgba(234, 88, 12, 0.4); cursor: pointer; transition: all 0.2s ease;">${anchorText}</a>`;
  };

  // 1. Extract inline code blocks: `code`
  let processed = text.replace(/`([^`]+)`/g, (_, codeContent) => {
    const index = codeTokens.length;
    codeTokens.push(
      `<code style="background: #F4F4F5; color: #EA580C; padding: 2px 6px; border-radius: 6px; font-size: 0.88em; font-family: monospace; border: 1px solid rgba(228, 228, 231, 0.6);">${escapeHtml(
        codeContent
      )}</code>`
    );
    return `@@CODEtok${index}END@@`;
  });

  // 2. Extract existing HTML <a> tags so they aren't mangled by plain URL matching
  processed = processed.replace(
    /<a\s+([^>]*?)href=["']([^"']+)["']([^>]*?)>(.*?)<\/a>/gi,
    (_, before, href, after, anchorText) => {
      const index = linkTokens.length;
      linkTokens.push(buildAnchorTag(href, anchorText));
      return `@@LINKtok${index}END@@`;
    }
  );

  // 3. Extract Markdown links: [anchor text](url) or [anchor text](url "title")
  processed = processed.replace(
    /\[([^\]]+)\]\((\s*(?:[^\s()]+|\([^\s()]+\))+\s*)(?:\s+["']([^"']*)["'])?\s*\)/g,
    (_, anchorText, url, title) => {
      const index = linkTokens.length;
      // Allow bold / italic inside anchor text
      const parsedAnchor = anchorText
        .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #18181B; font-weight: 700;">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em style="color: #EA580C; font-style: normal; font-weight: 600;">$1</em>');
      linkTokens.push(buildAnchorTag(url, parsedAnchor, title));
      return `@@LINKtok${index}END@@`;
    }
  );

  // 4. Extract autolinks in angle brackets: <https://...> or <mailto:...>
  processed = processed.replace(/<(https?:\/\/[^\s>]+|mailto:[^\s>]+)>/gi, (_, url) => {
    const index = linkTokens.length;
    linkTokens.push(buildAnchorTag(url, escapeHtml(url)));
    return `@@LINKtok${index}END@@`;
  });

  // 5. Extract raw URLs: https://... or http://... or www....
  processed = processed.replace(
    /\b((?:https?:\/\/|www\.)[^\s<>"'()]+(?:\([^\s<>"']+\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi,
    (match, url) => {
      const index = linkTokens.length;
      linkTokens.push(buildAnchorTag(url, escapeHtml(url)));
      return `@@LINKtok${index}END@@`;
    }
  );

  // 6. Bold: **text** or __text__
  processed = processed
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #18181B; font-weight: 700;">$1</strong>')
    .replace(/__(.*?)__/g, '<strong style="color: #18181B; font-weight: 700;">$1</strong>');

  // 7. Italic: *text* or _text_
  processed = processed
    .replace(/\*([^*]+)\*/g, '<em style="color: #EA580C; font-style: normal; font-weight: 600;">$1</em>')
    .replace(/\b_([^_]+)_\b/g, '<em style="color: #EA580C; font-style: normal; font-weight: 600;">$1</em>');

  // 8. Strikethrough: ~~text~~
  processed = processed.replace(/~~(.*?)~~/g, '<del style="color: #71717A;">$1</del>');

  // 9. Restore link tokens
  processed = processed.replace(/@@LINKtok(\d+)END@@/g, (_, index) => linkTokens[Number(index)] || "");

  // 10. Restore code tokens
  processed = processed.replace(/@@CODEtok(\d+)END@@/g, (_, index) => codeTokens[Number(index)] || "");

  return processed;
}

export function renderBlogContent(content: string): React.ReactNode {
  if (!content) return null;

  const lines = content.split("\n");
  const nodes: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBlockLines: string[] = [];
  let codeBlockLang = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // 1. Code block boundary: ```
    if (trimmed.startsWith("```")) {
      if (inCodeBlock) {
        // Closing code block
        nodes.push(
          <Box
            key={`code-${i}`}
            component="pre"
            sx={{
              bgcolor: "#18181B",
              color: "#F4F4F5",
              p: { xs: 2.5, sm: 3 },
              borderRadius: "14px",
              overflowX: "auto",
              fontFamily: "monospace",
              fontSize: { xs: "0.85rem", md: "0.92rem" },
              lineHeight: 1.6,
              my: 3,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              "& code": {
                fontFamily: "inherit",
              },
            }}
          >
            <code>{codeBlockLines.join("\n")}</code>
          </Box>
        );
        inCodeBlock = false;
        codeBlockLines = [];
        codeBlockLang = "";
      } else {
        // Opening code block
        inCodeBlock = true;
        codeBlockLang = trimmed.replace(/^```/, "").trim();
        codeBlockLines = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockLines.push(line);
      continue;
    }

    // 2. Empty line
    if (!trimmed) {
      nodes.push(<Box key={`space-${i}`} sx={{ height: 16 }} />);
      continue;
    }

    // 3. Headings
    if (trimmed.startsWith("## ")) {
      nodes.push(
        <Typography
          key={`h2-${i}`}
          variant="h2"
          dangerouslySetInnerHTML={{
            __html: parseInlineMarkdown(trimmed.replace(/^##\s+/, "")),
          }}
          sx={{
            color: "#18181B",
            fontWeight: 700,
            mt: { xs: 5, md: 7 },
            mb: 2.5,
            fontSize: { xs: "1.55rem", sm: "1.95rem", md: "2.15rem" },
            letterSpacing: "-0.025em",
            lineHeight: 1.25,
            textWrap: "balance",
          }}
        />
      );
      continue;
    }

    if (trimmed.startsWith("### ")) {
      nodes.push(
        <Typography
          key={`h3-${i}`}
          variant="h3"
          dangerouslySetInnerHTML={{
            __html: parseInlineMarkdown(trimmed.replace(/^###\s+/, "")),
          }}
          sx={{
            color: "#27272A",
            fontWeight: 700,
            mt: { xs: 4, md: 5 },
            mb: 2,
            fontSize: { xs: "1.25rem", sm: "1.45rem", md: "1.55rem" },
            letterSpacing: "-0.015em",
            lineHeight: 1.35,
            textWrap: "balance",
          }}
        />
      );
      continue;
    }

    if (trimmed.startsWith("#### ")) {
      nodes.push(
        <Typography
          key={`h4-${i}`}
          variant="h4"
          dangerouslySetInnerHTML={{
            __html: parseInlineMarkdown(trimmed.replace(/^####\s+/, "")),
          }}
          sx={{
            color: "#18181B",
            fontWeight: 600,
            mt: 3.5,
            mb: 1.5,
            fontSize: "1.15rem",
            letterSpacing: "-0.01em",
          }}
        />
      );
      continue;
    }

    // 4. Blockquotes (> text)
    if (trimmed.startsWith("> ")) {
      nodes.push(
        <Box
          key={`quote-${i}`}
          sx={{
            borderLeft: "4px solid #EA580C",
            pl: { xs: 2.5, sm: 3.5 },
            py: 2,
            my: 4,
            bgcolor: "rgba(249, 115, 22, 0.05)",
            borderRadius: "0 14px 14px 0",
          }}
        >
          <Typography
            dangerouslySetInnerHTML={{
              __html: parseInlineMarkdown(trimmed.replace(/^>\s+/, "")),
            }}
            sx={{
              color: "#18181B",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: { xs: "1.05rem", md: "1.18rem" },
              lineHeight: 1.7,
            }}
          />
        </Box>
      );
      continue;
    }

    // 5. Horizontal rule (--- or *** or ___)
    if (/^(\*\*\*|---|___)$/.test(trimmed)) {
      nodes.push(
        <Divider
          key={`divider-${i}`}
          sx={{ my: 4, borderColor: "rgba(228, 228, 231, 0.8)" }}
        />
      );
      continue;
    }

    // 6. Markdown image: ![alt](url)
    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+["']([^"']*)["'])?\)$/);
    if (imgMatch) {
      const alt = imgMatch[1];
      const src = imgMatch[2];
      nodes.push(
        <Box key={`img-${i}`} component="figure" sx={{ my: 4, textAlign: "center" }}>
          <Box
            component="img"
            src={src}
            alt={alt}
            sx={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "14px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
            }}
          />
          {alt && (
            <Typography
              variant="caption"
              sx={{ display: "block", mt: 1, color: "#71717A", fontSize: "0.85rem" }}
            >
              {alt}
            </Typography>
          )}
        </Box>
      );
      continue;
    }

    // 7. Bulleted list items (- item or * item)
    if (/^[-*]\s+/.test(trimmed)) {
      const itemText = trimmed.replace(/^[-*]\s+/, "");
      nodes.push(
        <Box
          key={`list-${i}`}
          sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.2, pl: 1 }}
        >
          <Typography
            sx={{ color: "#EA580C", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.6 }}
          >
            &bull;
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(itemText) }}
            sx={{
              color: "#3F3F46",
              fontSize: { xs: "0.98rem", md: "1.05rem" },
              lineHeight: 1.75,
            }}
          />
        </Box>
      );
      continue;
    }

    // 8. Ordered list items (1. item)
    if (/^\d+\.\s+/.test(trimmed)) {
      const match = trimmed.match(/^(\d+)\.\s+(.*)/);
      if (match) {
        nodes.push(
          <Box
            key={`olist-${i}`}
            sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.4, pl: 1 }}
          >
            <Box
              sx={{
                minWidth: 24,
                height: 24,
                borderRadius: "50%",
                bgcolor: "rgba(249, 115, 22, 0.1)",
                color: "#EA580C",
                fontWeight: 700,
                fontSize: "0.78rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 0.3,
                flexShrink: 0,
              }}
            >
              {match[1]}
            </Box>
            <Typography
              dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(match[2]) }}
              sx={{
                color: "#3F3F46",
                fontSize: { xs: "0.98rem", md: "1.05rem" },
                lineHeight: 1.75,
              }}
            />
          </Box>
        );
        continue;
      }
    }

    // 9. Standard paragraph
    nodes.push(
      <Typography
        key={`p-${i}`}
        variant="body1"
        dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(trimmed) }}
        sx={{
          mb: 2.8,
          color: "#3F3F46",
          fontSize: { xs: "1.02rem", md: "1.12rem" },
          lineHeight: 1.85,
          letterSpacing: "-0.005em",
        }}
      />
    );
  }

  // If file ended while still in a code block
  if (inCodeBlock && codeBlockLines.length > 0) {
    nodes.push(
      <Box
        key="code-end"
        component="pre"
        sx={{
          bgcolor: "#18181B",
          color: "#F4F4F5",
          p: { xs: 2.5, sm: 3 },
          borderRadius: "14px",
          overflowX: "auto",
          fontFamily: "monospace",
          fontSize: { xs: "0.85rem", md: "0.92rem" },
          lineHeight: 1.6,
          my: 3,
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <code>{codeBlockLines.join("\n")}</code>
      </Box>
    );
  }

  return nodes;
}
