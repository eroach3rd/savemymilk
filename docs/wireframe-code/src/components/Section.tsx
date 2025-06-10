import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
interface SectionProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
}
export const Section = ({
  title,
  children,
  isOpen = false
}: SectionProps) => {
  const [collapsed, setCollapsed] = useState(!isOpen);
  useEffect(() => {
    setCollapsed(!isOpen);
  }, [isOpen]);
  return <div className={`border border-zinc-300 rounded-xl mb-6 bg-zinc-50 ${collapsed ? 'collapsed' : ''}`}>
      <div className="p-5 flex justify-between items-center cursor-pointer" onClick={() => setCollapsed(!collapsed)}>
        <h2 className="text-xl font-semibold text-zinc-800">{title}</h2>
        <ChevronRight className={`h-6 w-6 text-zinc-500 transition-transform ${collapsed ? '' : 'rotate-90'}`} />
      </div>
      <div style={{
      display: 'grid',
      gridTemplateRows: collapsed ? '0fr' : '1fr',
      transition: 'grid-template-rows 0.4s ease-out'
    }}>
        <div className="overflow-hidden">
          <div className="px-5 pb-5">{children}</div>
        </div>
      </div>
    </div>;
};