"use client";

import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Tooltip,
  Paper,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from "@mui/material";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import FormatBoldRoundedIcon from "@mui/icons-material/FormatBoldRounded";
import FormatItalicRoundedIcon from "@mui/icons-material/FormatItalicRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import FormatListNumberedRoundedIcon from "@mui/icons-material/FormatListNumberedRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import { renderBlogContent } from "../../lib/blogParser";

interface BlogContentEditorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  rows?: number;
  required?: boolean;
}

export default function BlogContentEditor({
  value,
  onChange,
  label = "Main Content",
  rows = 16,
  required = false,
}: BlogContentEditorProps) {
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");
  const [linkDialogOpen, setLinkDialogOpen] = useState(false);
  const [linkText, setLinkText] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [selectionRange, setSelectionRange] = useState<{ start: number; end: number }>({
    start: 0,
    end: 0,
  });

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleOpenLinkDialog = () => {
    let selected = "";
    let start = 0;
    let end = 0;

    if (textareaRef.current) {
      start = textareaRef.current.selectionStart || 0;
      end = textareaRef.current.selectionEnd || 0;
      selected = value.substring(start, end).trim();
    }

    setSelectionRange({ start, end });
    setLinkText(selected || "Link text");
    setLinkUrl("");
    setLinkDialogOpen(true);
  };

  const handleInsertLink = () => {
    let finalUrl = linkUrl.trim();
    const finalText = linkText.trim() || finalUrl;

    if (!finalUrl) {
      alert("Please enter a valid URL.");
      return;
    }

    // Auto-prefix https:// if it looks like an external web address without protocol
    if (
      !/^https?:\/\//i.test(finalUrl) &&
      !finalUrl.startsWith("/") &&
      !finalUrl.startsWith("#") &&
      !finalUrl.startsWith("mailto:") &&
      !finalUrl.startsWith("tel:")
    ) {
      finalUrl = `https://${finalUrl}`;
    }

    const markdownLink = `[${finalText}](${finalUrl})`;
    const before = value.substring(0, selectionRange.start);
    const after = value.substring(selectionRange.end);
    const newValue = `${before}${markdownLink}${after}`;

    onChange(newValue);
    setLinkDialogOpen(false);
    setLinkText("");
    setLinkUrl("");

    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        const cursor = selectionRange.start + markdownLink.length;
        textareaRef.current.setSelectionRange(cursor, cursor);
      }
    }, 50);
  };

  const wrapSelection = (prefix: string, suffix: string, defaultText: string) => {
    if (!textareaRef.current) {
      onChange(`${value}${prefix}${defaultText}${suffix}`);
      return;
    }

    const start = textareaRef.current.selectionStart || 0;
    const end = textareaRef.current.selectionEnd || 0;
    const selected = value.substring(start, end);
    const innerText = selected || defaultText;
    const replacement = `${prefix}${innerText}${suffix}`;

    const before = value.substring(0, start);
    const after = value.substring(end);
    const newValue = `${before}${replacement}${after}`;

    onChange(newValue);

    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        const newStart = start + prefix.length;
        const newEnd = newStart + innerText.length;
        textareaRef.current.setSelectionRange(newStart, newEnd);
      }
    }, 50);
  };

  return (
    <Box sx={{ border: "1px solid rgba(228, 228, 231, 0.9)", borderRadius: 3, overflow: "hidden", bgcolor: "#fff" }}>
      {/* Editor Header / Tab Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          px: 2,
          py: 1,
          bgcolor: "#FAF8F5",
          borderBottom: "1px solid rgba(228, 228, 231, 0.9)",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={(_, tab) => setActiveTab(tab)}
          sx={{
            minHeight: 38,
            "& .MuiTab-root": {
              minHeight: 38,
              py: 0.5,
              px: 2,
              fontSize: "0.88rem",
              fontWeight: 700,
              textTransform: "none",
            },
            "& .Mui-selected": {
              color: "#EA580C !important",
            },
            "& .MuiTabs-indicator": {
              bgcolor: "#EA580C",
            },
          }}
        >
          <Tab
            value="write"
            label="Write Content"
            icon={<EditRoundedIcon sx={{ fontSize: "1.1rem" }} />}
            iconPosition="start"
          />
          <Tab
            value="preview"
            label="Live Preview"
            icon={<VisibilityRoundedIcon sx={{ fontSize: "1.1rem" }} />}
            iconPosition="start"
          />
        </Tabs>

        {activeTab === "write" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, flexWrap: "wrap", my: 0.5 }}>
            <Tooltip title="Add Clickable Link [Text](URL)">
              <Button
                size="small"
                variant="outlined"
                startIcon={<LinkRoundedIcon />}
                onClick={handleOpenLinkDialog}
                sx={{
                  color: "#EA580C",
                  borderColor: "rgba(234, 88, 12, 0.4)",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  textTransform: "none",
                  py: 0.4,
                  px: 1.5,
                  borderRadius: 2,
                  "&:hover": {
                    borderColor: "#EA580C",
                    bgcolor: "rgba(234, 88, 12, 0.05)",
                  },
                }}
              >
                Add Link
              </Button>
            </Tooltip>

            <Divider orientation="vertical" flexItem sx={{ mx: 0.5, my: 0.8 }} />

            <Tooltip title="Bold (**text**)">
              <IconButton size="small" onClick={() => wrapSelection("**", "**", "bold text")}>
                <FormatBoldRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Italic (*text*)">
              <IconButton size="small" onClick={() => wrapSelection("*", "*", "italic text")}>
                <FormatItalicRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Heading 2 (## Heading)">
              <Button
                size="small"
                onClick={() => wrapSelection("\n## ", "\n", "Heading 2")}
                sx={{ minWidth: 32, px: 0.8, fontWeight: 800, fontSize: "0.82rem", color: "#18181B" }}
              >
                H2
              </Button>
            </Tooltip>

            <Tooltip title="Heading 3 (### Heading)">
              <Button
                size="small"
                onClick={() => wrapSelection("\n### ", "\n", "Heading 3")}
                sx={{ minWidth: 32, px: 0.8, fontWeight: 800, fontSize: "0.82rem", color: "#18181B" }}
              >
                H3
              </Button>
            </Tooltip>

            <Tooltip title="Bullet List (- Item)">
              <IconButton size="small" onClick={() => wrapSelection("\n- ", "\n", "List item")}>
                <FormatListBulletedRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Numbered List (1. Item)">
              <IconButton size="small" onClick={() => wrapSelection("\n1. ", "\n", "Numbered item")}>
                <FormatListNumberedRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Quote (> Quote)">
              <IconButton size="small" onClick={() => wrapSelection("\n> ", "\n", "Quote text")}>
                <FormatQuoteRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Inline Code (`code`)">
              <IconButton size="small" onClick={() => wrapSelection("`", "`", "code")}>
                <CodeRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Code Block (```code```)">
              <IconButton size="small" onClick={() => wrapSelection("\n```tsx\n", "\n```\n", "// write code here")}>
                <DataObjectRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Box>

      {/* Editor Body */}
      {activeTab === "write" ? (
        <Box sx={{ p: 2 }}>
          <TextField
            inputRef={textareaRef}
            fullWidth
            label={label}
            name="content"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            multiline
            rows={rows}
            variant="outlined"
            placeholder="Write your article content here in Markdown or plain text...&#10;&#10;To add clickable links:&#10;• Click the 'Add Link' button above&#10;• Or type: [My Link Text](https://example.com)&#10;• Or paste raw URLs: https://example.com&#10;&#10;You can also use **bold**, *italic*, ## headings, and - bullet lists."
            sx={{
              "& .MuiOutlinedInput-root": {
                fontFamily: "inherit",
                fontSize: "0.98rem",
                lineHeight: 1.7,
              },
            }}
          />

          <Box
            sx={{
              mt: 1.5,
              p: 1.5,
              borderRadius: 2,
              bgcolor: "rgba(234, 88, 12, 0.05)",
              border: "1px solid rgba(234, 88, 12, 0.2)",
              display: "flex",
              alignItems: "flex-start",
              gap: 1.5,
            }}
          >
            <HelpOutlineRoundedIcon sx={{ color: "#EA580C", fontSize: "1.2rem", mt: 0.2, flexShrink: 0 }} />
            <Typography variant="caption" sx={{ color: "#4B5563", fontSize: "0.82rem", lineHeight: 1.6 }}>
              <strong style={{ color: "#EA580C" }}>Link Tips:</strong> Highlight text and click <strong>Add Link</strong>,
              or type <code>[Link Text](https://yourlink.com)</code>. Plain URLs like <code>https://yourlink.com</code> are
              also made clickable automatically. Click <strong>Live Preview</strong> above at any time to test your clickable links!
            </Typography>
          </Box>
        </Box>
      ) : (
        /* Live Preview Mode */
        <Box
          sx={{
            p: { xs: 3, sm: 4 },
            minHeight: 400,
            bgcolor: "#fff",
            "& a, & .blog-link": {
              color: "#EA580C",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              textDecorationColor: "rgba(234, 88, 12, 0.4)",
              cursor: "pointer",
              pointerEvents: "auto",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                color: "#C2410C",
                textDecorationColor: "#EA580C",
                bgcolor: "rgba(234, 88, 12, 0.08)",
                borderRadius: "3px",
              },
            },
          }}
        >
          {value.trim() ? (
            <Box className="article-body">
              <Box
                sx={{
                  mb: 3,
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: "rgba(234, 88, 12, 0.06)",
                  border: "1px solid rgba(234, 88, 12, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <VisibilityRoundedIcon sx={{ color: "#EA580C", fontSize: "1.1rem" }} />
                <Typography variant="caption" sx={{ color: "#4B5563", fontSize: "0.82rem" }}>
                  <strong style={{ color: "#EA580C" }}>Interactive Preview:</strong> All links below are live and testable. Click any link to confirm it works properly!
                </Typography>
              </Box>
              {renderBlogContent(value)}
            </Box>
          ) : (
            <Typography sx={{ color: "#9CA3AF", fontStyle: "italic", textAlign: "center", py: 8 }}>
              Nothing to preview yet. Switch back to &quot;Write Content&quot; and enter your blog content.
            </Typography>
          )}
        </Box>
      )}

      {/* Insert Link Dialog */}
      <Dialog
        open={linkDialogOpen}
        onClose={() => setLinkDialogOpen(false)}
        maxWidth="xs"
        slotProps={{ paper: { sx: { borderRadius: 3, p: 1 } } }}
      >
        <DialogTitle sx={{ fontWeight: 800, pb: 1, display: "flex", alignItems: "center", gap: 1 }}>
          <LinkRoundedIcon sx={{ color: "#EA580C" }} />
          Insert Clickable Link
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: "8px !important" }}>
          <TextField
            autoFocus
            label="Link Text (Displayed text)"
            fullWidth
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
            placeholder="e.g. Visit our Services"
            variant="outlined"
            size="small"
          />
          <TextField
            label="URL (Target address)"
            fullWidth
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            placeholder="e.g. https://example.com or /services"
            variant="outlined"
            size="small"
            helperText="External URLs (https://...) open in a new tab."
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setLinkDialogOpen(false)} sx={{ fontWeight: 600, color: "#71717A" }}>
            Cancel
          </Button>
          <Button
            onClick={handleInsertLink}
            variant="contained"
            sx={{
              fontWeight: 700,
              borderRadius: 2,
              px: 3,
              bgcolor: "#EA580C",
              "&:hover": { bgcolor: "#C2410C" },
            }}
          >
            Insert Link
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
