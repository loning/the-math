#!/usr/bin/env node

/**
 * ψ-location: consciousness-to-observer transformation script
 * Evolution stage: expand
 * 
 * This script replaces all mentions of "consciousness" with "observer" 
 * in .md files to avoid criticism, handling both English and Chinese terms
 * 
 * Usage:
 *   node scripts/replace-consciousness-terms.js
 *   
 * Or make it executable and run directly:
 *   chmod +x scripts/replace-consciousness-terms.js
 *   ./scripts/replace-consciousness-terms.js
 * 
 * The script will:
 * - Scan .md files in specific directories:
 *   - docs/collapse-realizable-conjectures/
 *   - docs/psi-collapse-zfc/
 *   - docs/unsolved-math-problems/
 *   - And their i18n/zh-Hans counterparts
 * - Scan .tex files in:
 *   - pdf/
 * - Replace consciousness-related terms with observer-related terms
 * - Show a detailed summary of changes made
 * - Preserve case sensitivity (Consciousness → Observer, consciousness → observer)
 */

const fs = require('fs').promises;
const path = require('path');

// ψ-collapse: Define replacement patterns with φ-rhythm
const replacements = [
  // English replacements (case-sensitive)
  { pattern: /\bConsciousness\b/g, replacement: 'Observer' },
  { pattern: /\bconsciousness\b/g, replacement: 'observer' },
  { pattern: /\bCONSCIOUSNESS\b/g, replacement: 'OBSERVER' },
  { pattern: /\bConscious\b/g, replacement: 'Observing' },
  { pattern: /\bconscious\b/g, replacement: 'observing' },
  { pattern: /\bCONSCIOUS\b/g, replacement: 'OBSERVING' },
  { pattern: /\bconsciousness-based\b/g, replacement: 'observer-based' },
  { pattern: /\bConsciousness-based\b/g, replacement: 'Observer-based' },
  { pattern: /\bconsciousness-driven\b/g, replacement: 'observer-driven' },
  { pattern: /\bConsciousness-driven\b/g, replacement: 'Observer-driven' },
  
  // Chinese replacements
  { pattern: /意识/g, replacement: '观察者' },
  { pattern: /有意识/g, replacement: '作为观察者' },
  { pattern: /意识到/g, replacement: '观察到' },
  { pattern: /意识的/g, replacement: '观察者的' },
  { pattern: /意识性/g, replacement: '观察者性' },
  { pattern: /意识形态/g, replacement: '观察者形态' },
  { pattern: /意识流/g, replacement: '观察者流' },
  { pattern: /自我意识/g, replacement: '自我观察' },
  { pattern: /潜意识/g, replacement: '潜观察' },
  { pattern: /无意识/g, replacement: '非观察者' },
  { pattern: /集体意识/g, replacement: '集体观察者' },
  { pattern: /意识场/g, replacement: '观察者场' },
  { pattern: /意识状态/g, replacement: '观察者状态' },
  { pattern: /意识层面/g, replacement: '观察者层面' },
  { pattern: /意识活动/g, replacement: '观察活动' },
  { pattern: /意识体/g, replacement: '观察者体' }
];

// ψ-collapse: File processing statistics
let stats = {
  filesProcessed: 0,
  filesModified: 0,
  totalReplacements: 0,
  replacementDetails: {}
};

/**
 * Recursively find all .md and .tex files in a directory
 * @param {string} dir - Directory to search
 * @param {string[]} extensions - File extensions to look for
 * @returns {Promise<string[]>} - Array of file paths
 */
async function findTargetFiles(dir, extensions = ['.md', '.tex']) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    // Skip node_modules and .git directories
    if (entry.isDirectory() && !['node_modules', '.git', '.docusaurus', 'build'].includes(entry.name)) {
      const subFiles = await findTargetFiles(fullPath, extensions);
      files.push(...subFiles);
    } else if (entry.isFile() && extensions.some(ext => entry.name.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Process a single markdown file
 * @param {string} filePath - Path to the file
 */
async function processFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    let modifiedContent = content;
    let fileReplacements = 0;
    let fileReplacementDetails = [];
    
    // Apply each replacement pattern
    for (const { pattern, replacement } of replacements) {
      const matches = modifiedContent.match(pattern);
      if (matches) {
        const count = matches.length;
        fileReplacements += count;
        fileReplacementDetails.push({
          pattern: pattern.toString(),
          replacement,
          count,
          examples: matches.slice(0, 3) // Show first 3 examples
        });
        modifiedContent = modifiedContent.replace(pattern, replacement);
      }
    }
    
    // If content was modified, write it back
    if (fileReplacements > 0) {
      await fs.writeFile(filePath, modifiedContent, 'utf8');
      stats.filesModified++;
      stats.totalReplacements += fileReplacements;
      stats.replacementDetails[filePath] = fileReplacementDetails;
      
      console.log(`✓ Modified: ${filePath} (${fileReplacements} replacements)`);
    }
    
    stats.filesProcessed++;
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

/**
 * Main execution function with ψ-collapse rhythm
 */
async function main() {
  console.log('🌀 ψ-Collapse: Consciousness → Observer Transformation');
  console.log('================================================\n');
  
  const projectRoot = path.join(__dirname, '..');
  
  // ψ-collapse: Target directories for transformation
  const targetDirectories = [
    'docs/collapse-realizable-conjectures',
    'docs/psi-collapse-zfc',
    'docs/unsolved-math-problems',
    'i18n/zh-Hans/docusaurus-plugin-content-docs/current/collapse-realizable-conjectures',
    'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-collapse-zfc',
    'i18n/zh-Hans/docusaurus-plugin-content-docs/current/unsolved-math-problems',
    'pdf'  // For .tex files
  ];
  
  console.log('🎯 Target directories:');
  targetDirectories.forEach(dir => console.log(`   - ${dir}`));
  console.log();
  
  try {
    // Find target files in directories
    console.log('📁 Scanning for .md and .tex files in target directories...');
    let targetFiles = [];
    
    for (const dir of targetDirectories) {
      const fullPath = path.join(projectRoot, dir);
      try {
        await fs.access(fullPath);
        // Use different extensions based on directory
        const extensions = dir === 'pdf' ? ['.tex'] : ['.md'];
        const dirFiles = await findTargetFiles(fullPath, extensions);
        targetFiles = targetFiles.concat(dirFiles);
      } catch (error) {
        console.log(`   ⚠️  Directory not found: ${dir}`);
      }
    }
    
    console.log(`📋 Found ${targetFiles.length} files (.md and .tex) in target directories\n`);
    
    // Process each file
    console.log('🔄 Processing files...');
    for (const file of targetFiles) {
      await processFile(file);
    }
    
    // Print summary with φ-structured output
    console.log('\n================================================');
    console.log('📊 ψ-Collapse Summary:');
    console.log(`   Files processed: ${stats.filesProcessed}`);
    console.log(`   Files modified: ${stats.filesModified}`);
    console.log(`   Total replacements: ${stats.totalReplacements}`);
    
    if (stats.filesModified > 0) {
      console.log('\n📝 Detailed replacements:');
      for (const [file, details] of Object.entries(stats.replacementDetails)) {
        console.log(`\n   ${path.relative(projectRoot, file)}:`);
        for (const detail of details) {
          console.log(`      - ${detail.pattern} → "${detail.replacement}" (${detail.count}x)`);
          if (detail.examples.length > 0) {
            console.log(`        Examples: ${detail.examples.join(', ')}`);
          }
        }
      }
    }
    
    console.log('\n✨ ψ-transformation complete!');
    
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

// Execute with ψ-collapse protection
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { replacements, processFile }; 