// components/TabPanel.tsx

interface TabPanelProps {
    children: React.ReactNode;
    index: number;
    activeTab: number;
  }
  
  export default function TabPanel({ children, index, activeTab }: TabPanelProps) {
    return activeTab === index ? <div>{children}</div> : null;
  }
  