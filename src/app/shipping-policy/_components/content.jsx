// ShippingPolicy.jsx
import Link from "next/link";
import React from "react";

export default function Shipping_Policy() {
  return (
    <main className="text-gray-900 px-4 sm:px-6 lg:px-20 py-12">
      <article className="mx-auto max-w-3xl">
        {/* Title */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Shipping Policy
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Last updated: <span className="font-medium">October 27, 2025</span>
          </p>
        </header>

        {/* Introduction */}
        <section className="space-y-6">
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            This shipping policy explains how MODERN DREAM FOUNDATION operates its
            shipping procedures and how we strive to meet your expectations with
            every order. Whether you’re a first-time buyer or a returning
            customer, we want to ensure that your experience with us is smooth
            and satisfactory, right from placing your order to the moment it
            arrives at your doorstep.
          </p>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Please read this shipping policy together with our{" "}
            <Link
              href="/terms-conditions"
              className="underline text-blue-600"
            >
              terms and conditions
            </Link>{" "}
            to familiarize yourself with the rest of our general guidelines.
          </p>
        </section>

        {/* Shipping and Delivery Options */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Shipping and Delivery Options
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            We offer a variety of shipping options to suit the needs of our
            customers.
          </p>

          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
              Free Shipping
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              As part of our commitment to an exceptional shopping experience,
              we are pleased to offer free shipping.
            </p>

            <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
              Flat Rate Shipping
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              To ensure affordability and simplicity in our shipping process, we
              provide a flat rate shipping option.
            </p>

            <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
              Shipping Methods
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              We offer a simple shipping method to suit the needs of our
              customers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base lg:text-lg leading-relaxed">
              <li>Standard: 1-2 Business Days</li>
            </ul>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              We strive for a swift preparation process and orders are typically
              processed and dispatched within 1-2 Days so that customers can
              receive their items promptly.
            </p>
          </div>
        </section>

        {/* Delayed Orders */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Delayed Orders
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Unexpected delays can occur due to various reasons such as logistic
            challenges, inclement weather, high demand, or carrier issues. We
            are committed to handling these situations with transparency and
            efficiency. In the event of a delay, our priority is to keep you
            informed. We will promptly notify you with updates on the status of
            your order and the expected new delivery time. Our goal is to
            provide clear and accurate information so you can plan accordingly.
          </p>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Understanding the inconvenience caused by delays, we offer options
            to maintain your satisfaction. If your order is significantly
            delayed, you will have the choice to continue with the order, modify
            it, or cancel it for a full refund. Our customer service team is
            always available to assist with any changes to your order.
          </p>
        </section>

        {/* Returns and Exchanges */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Returns and Exchanges
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            If you have any questions about refunds, returns, or exchanges,
            please review our{" "}
            <Link
              href="/cancellation-refund"
              className="underline text-blue-600"
            >
              refund policy
            </Link>
            .
          </p>
        </section>

        {/* Contact Information */}
        <section className="mt-10 space-y-6 pb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Contact Information
          </h2>
          <ul className="list-none pl-0 mt-4 space-y-2 text-sm sm:text-base md:text-lg">
            <li>
              <Link
                href="/contact/"
                className="underline text-blue-600"
              >
                Contact Page
              </Link>
            </li>
            <li>
              <Link
                href="mailto:info@moderndreamfoundation.com"
                className="underline text-blue-600"
              >
                info@moderndreamfoundation.com
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
