/* eslint-disable */
import React from "react";
import { Meta } from "../components/Meta";
import { Network, Truck } from "lucide-react";

const ServicesPage: React.FC = () => {
  return (
    <>
      <Meta title="AgriConnect Rwanda - Digital Marketplace" />
      <div className="services-container">
        <div className="hero-section">
          <h1>AgriConnect Rwanda: Connecting Farmers with Markets</h1>
          <p>Revolutionizing Rwanda's agricultural trade with a seamless digital platform</p>
        </div>

        <section className="marketplace-section">
          <h2>Digital Marketplace for Agricultural Produce</h2>
          <div className="marketplace-grid">
            <div className="marketplace-card">
              <h3>For Farmers</h3>
              <p>List your fresh produce and reach a wider market. Connect directly with wholesalers to increase your sales and profits.</p>
            </div>
            <div className="marketplace-card">
              <h3>For Wholesalers</h3>
              <p>Browse available products, compare prices, and place bulk orders efficiently. Find the best produce at competitive prices.</p>
            </div>
          </div>
        </section>

        <section className="market-insights">
      <h2>Real-Time Market Prices & Insights</h2>
      <div className="insights-grid">
        <div className="insight-card">
          <div className="icon">
            <svg viewBox="0 0 24 24" className="chart-icon">
              <path d="M3 3v18h18" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round"/>
              <path d="M7 14l4-4 4 4 4-4" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>Up-to-Date Prices</h3>
          <p>Farmers gain access to real-time market prices, ensuring they can sell at the most competitive rates.</p>
        </div>
        <div className="insight-card">
          <div className="icon">
            <svg viewBox="0 0 24 24" className="search-icon">
              <circle cx="11" cy="11" r="8" stroke="currentColor" fill="none" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>Informed Decisions</h3>
          <p>Wholesalers can make informed purchasing decisions based on the latest demand trends and market insights.</p>
        </div>
      </div>
    </section>

        <section className="payments-section">
          <h2>Secure Payment & Transactions</h2>
          <div className="payments-grid">
            <div className="payment-card">
              <span className="number">1</span>
              <div>
              <h3>Mobile Money Integration</h3>
              <p>Smooth and secure transactions via mobile money and bank payment integrations.</p>
              </div>
            </div>
            <div className="payment-card">
              <span className="number">2</span>
              <div>
              <h3>Digital Receipts</h3>
              <p>Transparency and trust between buyers and sellers with digital receipts for every transaction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="logistics-section">
  <h2>Logistics & Delivery Coordination</h2>
  <div className="logistics-timeline">
    <div className="timeline-item">
      <div className="step">1</div>
      <h3>Connect with Transporters</h3>
      <p>Farmers and wholesalers can easily connect with transporters for efficient deliveries.</p>
    </div>
    <div className="timeline-item">
      <div className="step">2</div>
      <h3>Verified Providers</h3>
      <p>Ensuring efficient and reliable transport of produce through verified logistics providers.</p>
    </div>
  </div>
</section> */}

<section className="market-insights">
      <h2>Logistics & Delivery Coordination</h2>
      <div className="insights-grid">
        <div className="insight-card">
        <div className="icon">
          <Network className="chart-icon" />
          </div>
          <h3>Connect with Transporters</h3>
          <p>Farmers and wholesalers can easily connect with transporters for efficient deliveries.</p>
        </div>
        <div className="insight-card">
          <div className="icon">
            <Truck className="search-icon" />
          </div>
          <h3>Verified Providers</h3>
          <p>Ensuring efficient and reliable transport of produce through verified logistics providers.</p>
        </div>
      </div>
    </section>

<section className="communication-section">
  <h2>Communication & Negotiation Tools</h2>
  <div className="tools-grid">
    <div className="tool-card">
      <h3>Direct Negotiations</h3>
      <p>Facilitate direct communication between farmers and buyers to negotiate prices and terms effectively.</p>
    </div>
    <div className="tool-card">
      <h3>In-App Messaging</h3>
      <p>Enable seamless communication within the platform for quick and efficient discussions.</p>
    </div>
    <div className="tool-card">
      <h3>AI Recommendations</h3>
      <p>Leverage AI-driven insights to provide recommendations for optimal pricing and market strategies.</p>
    </div>
  </div>
</section>

        <section className="training-section">
          <div className="training-grid">
            <div className="training-content">
            <h1 className="training-header">Farmer Training & Support</h1>
              <h3>Educational Content</h3>
              <p>Access best farming practices and stay updated with market trends.</p>
              <h3>AI Chatbots</h3>
              <p>Expert support for quick assistance with AI-powered chatbots and dedicated support teams.</p>
            </div>
            <div className="training-image">
              <img src="https://res.cloudinary.com/djrmfg6k9/image/upload/v1739368340/pexels-quang-nguyen-vinh-222549-6877977_gzw8rx.jpg" alt="Farmer training" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
