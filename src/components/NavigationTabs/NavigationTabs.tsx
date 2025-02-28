import "./NavigationTabs.scss";

interface NavigationTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function NavigationTabs({
  setActiveTab,
  activeTab,
}: NavigationTabsProps) {
  return (
    <nav className="navigation-tabs">
      <div className="navigation-tabs__container">
        <div
          className={`navigation-tabs__button ${
            activeTab === "general" ? "navigation-tabs__button--active" : ""
          }`}
          onClick={() => setActiveTab("general")}
        >
          Geral
        </div>
        <div
          className={`navigation-tabs__button ${
            activeTab === "cast" ? "navigation-tabs__button--active" : ""
          }`}
          onClick={() => setActiveTab("cast")}
        >
          Elenco
        </div>
        <div
          className={`navigation-tabs__button ${
            activeTab === "awards" ? "navigation-tabs__button--active" : ""
          }`}
          onClick={() => setActiveTab("awards")}
        >
          Principais Prêmios
        </div>
      </div>
      <div className="navigation-tabs__logo-container">
        <img
          className="navigation-tabs__logo"
          src={"/telecine_logo.png"}
          alt="Telecine Logo"
        />
      </div>
    </nav>
  );
}
