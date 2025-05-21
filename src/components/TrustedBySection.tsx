import React from "react";

const TrustedBySection: React.FC = () => {
  const logoBlockClasses =
    "h-32 flex items-center justify-center p-6 bg-#0f0f11 rounded-lg shadow-md border border-#f8c4b4";
  const logoTextClasses = "text-white font-medium text-lg capitalize";

  return (
    <section className="relative py-20  text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-5 auto-rows-[8rem] gap-0.5  rounded-lg overflow-hidden p-0.5">
          <div className={logoBlockClasses}>
            <div className={logoTextClasses}>reddit</div>
          </div>
          <div className={logoBlockClasses}>
            <div className={logoTextClasses}>Notion</div>
          </div>
          <div className={logoBlockClasses}>
            <div className={logoTextClasses}>Brex</div>
          </div>
          
          <div className="col-span-2 h-32 flex items-center justify-center p-6 bg-transparent border border-transparent"></div>
          <div className={logoBlockClasses}>
            <div className={logoTextClasses}>Hinge</div>
          </div>
          <div className="col-start-2 col-span-3 row-span-2 flex flex-col items-center justify-center p-6  text-center rounded-lg shadow-md border border-#f8c4b4">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Trusted by
              <br />
              leading data
              <br />
              teams
            </h2>
          </div>
          <div className={`${logoBlockClasses} col-start-5`}>
            <div className={logoTextClasses}>ANTHROPIC</div>
          </div>
          <div className={logoBlockClasses}>
            <div className={logoTextClasses}>ClickUp</div>
          </div>
          <div className={`${logoBlockClasses} col-start-5`}>
            <div className={logoTextClasses}>loom</div>
          </div>{" "}
          <div className={logoBlockClasses}>
            <div className={logoTextClasses}>AllTrails</div>
          </div>
          <div className={logoBlockClasses}>
            <div className={logoTextClasses}>Fivetran</div>
          </div>
          <div className="col-span-1 h-32 flex items-center justify-center p-6 bg-transparent border border-transparent"></div>
          <div className={`${logoBlockClasses} col-span-2`}>
            <div className={logoTextClasses}>SEATGEEK</div>
          </div>
          <div className={logoBlockClasses}>
            <div className={logoTextClasses}>ramp</div>
          </div>
          <div className={logoBlockClasses}>
            <div className={logoTextClasses}>babylist</div>
          </div>
          <div className={logoBlockClasses}>
            <div className={logoTextClasses}>algolia</div>
          </div>
          <div className={logoBlockClasses}>
            <div className={logoTextClasses}>RECURSION</div>
          </div>
          <div className={logoBlockClasses}>
            <div className={logoTextClasses}>TREASURY</div>
          </div>
          <div className="col-span-2 h-32 flex items-center justify-center p-6 bg-transparent border border-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
