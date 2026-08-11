import FAQSection from "@/components/FAQSection/FAQSection";
import { PROJECTS } from "@/components/Projects/Project";
import ProjectDescription from "@/components/Projects/ProjectDescription/ProjectDescription";
import Slider from "@/components/Slider/Slider";

const project = PROJECTS.find((e) => e.id === "monity")!;

export default function Monity() {
  return (
    <div className="flex flex-col gap-8">
      <ProjectDescription project={project} />

      <FAQSection title="Features">
        <p>
          My app is a versatile personal finance manager, budget tracker, and
          analyzer that empowers you to take control of your finances.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-teal-400/30">
            <h2 className="text-xl font-bold">
              💼 <strong>Multiple Account Support</strong>
            </h2>
            <p className="mt-2">Manage and monitor multiple accounts effortlessly.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-teal-400/30">
            <h2 className="text-xl font-bold">
              💰 <strong>Transaction Flexibility</strong>
            </h2>
            <p className="mt-2">
              Create <em>expenses</em>, <em>incomes</em>, and <em>transfers</em>{" "}
              between accounts with ease. Each transaction can include{" "}
              <em>subtransactions</em>, <em>payee</em>, <em>receiver</em>,{" "}
              <em>place</em>, <em>category</em>, and more.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-teal-400/30">
            <h2 className="text-xl font-bold">
              📊 <strong>Beautiful Dashboard</strong>
            </h2>
            <p className="mt-2">
              Get a clear overview of your financial health with a stunning
              dashboard that summarizes your expenses and incomes.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-teal-400/30">
            <h2 className="text-xl font-bold">
              📈 <strong>Detailed Chart Analysis</strong>
            </h2>
            <p className="mt-2">
              Explore your financial data with detailed chart analysis on a
              dedicated page.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-teal-400/30">
            <h2 className="text-xl font-bold">
              🎁 <strong>Gift Tracker</strong>
            </h2>
            <p className="mt-2">
              Keep track of special occasions with a gift registry where you can
              note what you received or gave to someone.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-teal-400/30">
            <h2 className="text-xl font-bold">
              🔍 <strong>Advanced Filters</strong>
            </h2>
            <p className="mt-2">
              Effortlessly search through your transactions and gifts using
              advanced filtering options.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-teal-400/30">
            <h2 className="text-xl font-bold">
              📱{" "}
              <strong>
                Modern, intuitive interface and Responsive Web Design (RWD)
              </strong>
            </h2>
            <p className="mt-2">
              Experience seamless access on any device, no matter what.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-teal-400/30">
            <h2 className="text-xl font-bold">
              🔒 <strong>Security Features</strong>
            </h2>
            <p className="mt-2">
              Rest easy knowing your data is secure with support for{" "}
              <em>2FA (Two-Factor Authentication)</em>, <em>PIN authorization</em>
              , and more.
            </p>
          </div>
        </div>

        <b className="mt-5 block text-teal-400">
          Experience the future of personal finance management with Monity
          today!
        </b>
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
