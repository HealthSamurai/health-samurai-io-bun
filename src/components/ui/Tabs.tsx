type Tab = {
  id: string;
  label: string;
  content: string;
};

type TabsProps = {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
};

export function Tabs({ tabs, defaultTab, className = "" }: TabsProps): string {
  const activeTab = defaultTab || tabs[0]?.id || "";

  return (
    <div className={`tabs ${className}`} data-signals={`{activeTab: '${activeTab}'}`}>
      <div className="tabs-list" role="tablist">
        {tabs.map((tab) => (
          <button
            className="tabs-trigger"
            role="tab"
            data-class={`{active: $activeTab == '${tab.id}'}`}
            data-on:click={`$activeTab = '${tab.id}'`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.map((tab) => (
          <div
            className="tabs-panel"
            role="tabpanel"
            data-show={`$activeTab == '${tab.id}'`}
            style="display: none"
            dangerouslySetInnerHTML={{ __html: tab.content }}
          />
        ))}
      </div>
    </div>
  );
}
