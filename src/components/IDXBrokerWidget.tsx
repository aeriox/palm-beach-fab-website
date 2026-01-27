import { useEffect, useRef } from 'react';

interface IDXBrokerWidgetProps {
  // Add your IDX Broker account ID here once you have it
  accountId?: string;
  // Widget type: 'search', 'featured', 'map', 'showcase'
  widgetType?: 'search' | 'featured' | 'map' | 'showcase';
  className?: string;
}

const IDXBrokerWidget = ({ 
  accountId, 
  widgetType = 'search',
  className = '' 
}: IDXBrokerWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!accountId) return;

    // IDX Broker script injection
    const script = document.createElement('script');
    script.src = `https://www.idxhome.com/idx/${accountId}/widget.js`;
    script.async = true;
    script.setAttribute('data-widget-type', widgetType);
    
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [accountId, widgetType]);

  // If no account ID, show placeholder
  if (!accountId) {
    return (
      <div className={`bg-muted/30 border border-border rounded-lg p-8 text-center ${className}`}>
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-display font-semibold text-foreground">
            Property Search Coming Soon
          </h3>
          <p className="text-muted-foreground">
            Our MLS-powered property search is being configured. In the meantime, contact us for personalized property assistance.
          </p>
          <p className="text-sm text-muted-foreground/70">
            IDX Broker integration pending setup
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`idx-broker-widget ${className}`}
      id={`idx-widget-${widgetType}`}
    />
  );
};

export default IDXBrokerWidget;
