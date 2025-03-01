import FAQSection from "@/components/FAQSection/FAQSection";
import { PROJECTS } from "@/components/Projects/Project";
import ProjectDescription from "@/components/Projects/ProjectDescription/ProjectDescription";
import Slider from "@/components/Slider/Slider";

const project = PROJECTS.find((e) => e.id === "monity")!;

export default function Monity() {
  return (
    <div className="flex flex-col gap-2">
      <ProjectDescription project={project} />

      <FAQSection title="Features">
        <div className="flex flex-col gap-3">
          <p>
            My app is a versatile personal finance manager, budget tracker, and
            analyzer that empowers you to take control of your finances.
          </p>

          <h1>
            💼 <strong>Multiple Account Support</strong>
          </h1>
          <p>Manage and monitor multiple accounts effortlessly.</p>

          <h1>
            💰 <strong>Transaction Flexibility</strong>
          </h1>
          <p>
            Create <em>expenses</em>, <em>incomes</em>, and <em>transfers</em>{" "}
            between accounts with ease. Each transaction can include{" "}
            <em>subtransactions</em>, <em>payee</em>, <em>receiver</em>,{" "}
            <em>place</em>, <em>category</em>, and more.
          </p>

          <h1>
            📊 <strong>Beautiful Dashboard</strong>
          </h1>
          <p>
            Get a clear overview of your financial health with a stunning
            dashboard that summarizes your expenses and incomes.
          </p>

          <h1>
            📈 <strong>Detailed Chart Analysis</strong>
          </h1>
          <p>
            Explore your financial data with detailed chart analysis on a
            dedicated page.
          </p>

          <h1>
            🎁 <strong>Gift Tracker</strong>
          </h1>
          <p>
            Keep track of special occasions with a gift registry where you can
            note what you received or gave to someone.
          </p>

          <h1>
            🔍 <strong>Advanced Filters</strong>
          </h1>
          <p>
            Effortlessly search through your transactions and gifts using
            advanced filtering options.
          </p>

          <h1>
            📱{" "}
            <strong>
              Modern, intuitive interface and Responsive Web Design (RWD)
            </strong>
          </h1>
          <p>Experience seamless access on any device, no matter what.</p>

          <h1>
            🔒 <strong>Security Features</strong>
          </h1>
          <p>
            Rest easy knowing your data is secure with support for{" "}
            <em>2FA (Two-Factor Authentication)</em>, <em>PIN authorization</em>
            , and more.
          </p>

          <b className="text-teal-400">
            Experience the future of personal finance management with Monity
            today!
          </b>
        </div>
      </FAQSection>
      <Slider
        images={[
          "/imgs/projects/monity/ss1.png",
          "/imgs/projects/monity/ss2.png",
          "/imgs/projects/monity/ss3.png",
          "/imgs/projects/monity/ss4.png",
          "/imgs/projects/monity/ss5.png",
          "/imgs/projects/monity/ss6.png",
          "/imgs/projects/monity/ss7.png",
          "/imgs/projects/monity/ss8.png",
          "/imgs/projects/monity/ss9.png",
        ]}
      />
    </div>
  );
}
