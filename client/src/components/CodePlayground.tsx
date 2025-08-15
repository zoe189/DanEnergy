import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, RotateCcw, Download, Code } from "lucide-react";

const CodePlayground = () => {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            margin-bottom: 20px;
        }
        .button {
            background: #667eea;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        .button:hover {
            background: #764ba2;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Website!</h1>
        <p>This is my first webpage created with HTML and CSS.</p>
        <button class="button" onclick="changeColor()">Click me!</button>
        <p id="message" style="margin-top: 20px;"></p>
    </div>
    
    <script>
        function changeColor() {
            const message = document.getElementById('message');
            message.innerHTML = '🎉 Great job! You clicked the button!';
            message.style.color = '#667eea';
            message.style.fontWeight = 'bold';
        }
    </script>
</body>
</html>`);

  const resetCode = () => {
    setHtmlCode(`<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Start coding here...</p>
</body>
</html>`);
  };

  return (
    <section id="playground" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Interactive
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Code Playground
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Try coding right here! Edit the code and see your changes in real-time. Perfect for experimenting and learning.
          </p>
        </div>

        {/* Playground Container */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Code Editor */}
            <Card className="p-6 bg-code-bg border-border shadow-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-white">HTML Editor</h3>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={resetCode} className="text-white hover:bg-white/10">
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Download className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <textarea
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  className="w-full h-96 bg-transparent text-code-text font-mono text-sm p-4 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your HTML code here..."
                  spellCheck={false}
                />
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  Lines: {htmlCode.split('\n').length} | Characters: {htmlCode.length}
                </div>
                <Button variant="success" size="sm">
                  <Play className="h-4 w-4" />
                  Run Code
                </Button>
              </div>
            </Card>

            {/* Live Preview */}
            <Card className="p-6 bg-background border-border shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground ml-2">Live Preview</h3>
              </div>
              
              <div className="bg-white border border-border rounded-lg h-96 overflow-auto">
                <iframe
                  srcDoc={htmlCode}
                  className="w-full h-full border-none"
                  title="Code Preview"
                  sandbox="allow-scripts"
                />
              </div>
              
              <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  ✨ <strong>Tip:</strong> Try changing the text, colors, or adding new HTML elements to see them appear instantly!
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Try These Examples</h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              onClick={() => setHtmlCode(`<h1 style="color: #667eea; text-align: center;">Hello World!</h1>\n<p style="text-align: center;">My first webpage</p>`)}
            >
              Simple Page
            </Button>
            <Button 
              variant="outline"
              onClick={() => setHtmlCode(`<div style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4); padding: 20px; text-align: center; color: white; border-radius: 10px;">\n  <h2>Colorful Card</h2>\n  <p>With gradient background!</p>\n</div>`)}
            >
              Gradient Card
            </Button>
            <Button 
              variant="outline"
              onClick={() => setHtmlCode(`<button onclick="alert('Hello from JavaScript!')" style="background: #667eea; color: white; padding: 15px 30px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Click Me!</button>`)}
            >
              Interactive Button
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodePlayground;