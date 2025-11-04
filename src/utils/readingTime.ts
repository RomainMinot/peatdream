/**
 * Calculate reading time based on word count
 * Average reading speed: 200 words per minute for French
 */
export function calculateReadingTime(content: string | undefined): number {
  if (!content) return 0;

  // Remove HTML tags
  const text = content.replace(/<[^>]*>/g, '');

  // Count words (split by whitespace)
  const words = text.trim().split(/\s+/).length;

  // Calculate reading time (200 words per minute)
  const minutes = Math.ceil(words / 200);

  return minutes;
}

/**
 * Extract first image URL from markdown content
 */
export function extractFirstImage(content: string | undefined): string | null {
  if (!content) return null;

  // Match markdown image syntax: ![alt](url)
  const markdownImageMatch = content.match(/!\[.*?\]\((.*?)\)/);
  if (markdownImageMatch) {
    return markdownImageMatch[1];
  }

  // Match HTML img tags
  const htmlImageMatch = content.match(/<img[^>]+src="([^">]+)"/);
  if (htmlImageMatch) {
    return htmlImageMatch[1];
  }

  return null;
}
