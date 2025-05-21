import React from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  // Simple syntax highlighting for Python
  const highlightPython = (code: string) => {
    const keywords = ['import', 'from', 'for', 'in', 'if', 'else', 'def', 'return', 'print'];
    const specialValues = ['True', 'False', 'None'];
    
    let lines = code.split('\n');
    
    return lines.map((line, i) => {
      // Line numbers
      let lineNum = `<span class="text-gray-500 inline-block w-6 text-right mr-4">${i + 1}</span>`;
      
      // Comments
      line = line.replace(/(#.*)$/g, '<span class="text-gray-500">$1</span>');
      
      // Strings
      line = line.replace(/(['"])(.*?)(['"])/g, '<span class="text-yellow-300">$1$2$3</span>');
      
      // Keywords
      keywords.forEach(keyword => {
        const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
        line = line.replace(regex, '<span class="text-blue-400">$1</span>');
      });
      
      // Special values
      specialValues.forEach(value => {
        const regex = new RegExp(`\\b(${value})\\b`, 'g');
        line = line.replace(regex, '<span class="text-purple-400">$1</span>');
      });
      
      // Functions
      line = line.replace(/(\w+)(\s*\()/g, '<span class="text-green-400">$1</span>$2');
      
      // Variables with f-strings
      line = line.replace(/\{([\w\._]+)\}/g, '{<span class="text-red-400">$1</span>}');
      
      return `${lineNum}${line}`;
    }).join('\n');
  };

  const getHighlightedCode = () => {
    if (language === 'python') {
      return highlightPython(code);
    }
    return code;
  };
  
  return (
    <pre className="code-block overflow-x-auto">
      <code dangerouslySetInnerHTML={{ __html: getHighlightedCode() }} />
    </pre>
  );
};

export default CodeBlock;