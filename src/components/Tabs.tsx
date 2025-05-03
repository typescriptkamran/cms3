// components/Tabs.tsx

interface TabsProps {
    activeTab: number;
    setActiveTab: (index: number) => void;
    tabs: string[];
  }
  
  export default function Tabs({ activeTab, setActiveTab, tabs }: TabsProps) {
    return (
      <div className="flex mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${activeTab === index ? "bg-blue-600 text-white" : "bg-gray-200"} rounded`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  }
  