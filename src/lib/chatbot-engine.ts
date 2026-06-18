import {
  chatbotFallback,
  chatbotKnowledge,
  type KnowledgeEntry,
} from '../data/chatbot-knowledge';

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^\w\s]/g, ' ').trim();
}

function scoreMatch(query: string, entry: KnowledgeEntry): number {
  const normalizedQuery = normalize(query);
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);

  let score = 0;
  for (const keyword of entry.keywords) {
    const normalizedKeyword = normalize(keyword);
    if (normalizedQuery.includes(normalizedKeyword)) {
      score += normalizedKeyword.split(/\s+/).length * 3;
    }
    for (const word of queryWords) {
      if (normalizedKeyword.includes(word) && word.length > 2) {
        score += 1;
      }
    }
  }
  return score;
}

export function findAnswer(query: string): string {
  if (!query.trim()) return chatbotFallback;

  const scored = chatbotKnowledge
    .map((entry) => ({ entry, score: scoreMatch(query, entry) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) return chatbotFallback;
  return scored[0].entry.answer;
}

export async function getBotResponse(
  query: string,
  onTyping?: () => void,
): Promise<string> {
  const delay = 600 + Math.random() * 800;
  await new Promise<void>((resolve) => {
    onTyping?.();
    setTimeout(resolve, delay);
  });
  return findAnswer(query);
}
