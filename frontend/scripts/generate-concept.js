#!/usr/bin/env node

/**
 * Concept Content Generator
 * 
 * This script helps generate concept content templates quickly.
 * Usage: node scripts/generate-concept.js <slug>
 */

const fs = require('fs');
const path = require('path');

const slug = process.argv[2];

if (!slug) {
    console.error('Usage: node scripts/generate-concept.js <slug>');
    process.exit(1);
}

const template = `
  // ${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
  '${slug}': {
    whatItIs: "<strong>[Concept Name]</strong> is [definition in 1-2 sentences].",
    analogy: {
      title: "The [Something] Analogy",
      items: [
        { emoji: "🎯", title: "Part 1", subtitle: "Description" },
        { emoji: "⚡", title: "Part 2 (Main Concept)", subtitle: "Description", highlighted: true },
        { emoji: "🎨", title: "Part 3", subtitle: "Description" },
      ],
      description: "Explanation of how the analogy relates to the concept."
    },
    diagram: [
      { emoji: "📱", title: "Start", subtitle: "Action", color: "primary" },
      { emoji: "🔄", title: "Process", subtitle: "Action", color: "secondary" },
      { emoji: "✅", title: "Result", subtitle: "Action", color: "accent" },
    ],
    howItWorks: [
      { step: "1", title: "First step", description: "What happens" },
      { step: "2", title: "Second step", description: "What happens" },
      { step: "3", title: "Third step", description: "What happens" },
      { step: "4", title: "Fourth step", description: "What happens" },
    ],
    misunderstanding: {
      wrong: '"Common misconception about the concept"',
      correct: "The <strong>correct understanding</strong> with emphasis on key points."
    },
    realWorld: {
      title: "Real-World Example",
      description: "When you [do something in real life]:",
      points: [
        "Point 1 explaining the concept in practice",
        "Point 2 showing how it works",
        "Point 3 demonstrating the benefit",
        "Point 4 showing the impact",
      ]
    }
  },
`;

console.log('\n=== Generated Template for:', slug, '===\n');
console.log(template);
console.log('\n=== Copy this into lib/concept-content.ts ===\n');
