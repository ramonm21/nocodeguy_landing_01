import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const CodeBlock = ({ children, className }: CodeBlockProps) => {
  return (
    <div className="relative">
      <pre className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-gray-950 py-4 dark:bg-gray-900",
        className
      )}>
        {children}
      </pre>
    </div>
  );
};

const MDXImage = ({ src, alt, width = 800, height = 400, className }: ImageProps) => {
  return (
    <div className="my-8 overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("object-cover", className)}
      />
    </div>
  );
};

const components = {
  pre: CodeBlock,
  code: ({ children, className }: CodeBlockProps) => (
    <code className={cn(
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
      className
    )}>
      {children}
    </code>
  ),
  img: MDXImage,
};

export default components;
