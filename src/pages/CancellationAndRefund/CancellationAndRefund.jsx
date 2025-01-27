import React from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import "./CancellationAndRefund.scss";

const CancellationAndRefund = () => {
  return (
    <PageContainer showScrollOnDelay={true}>
      <div className="cancellation-and-refund">
        <h1>Cancellation and Refund Policy:</h1>
        <p>
          All the services provided by Koders including Web Design, Web
          Development, Mobile Application Development, Software Development,
          Website Maintenance are accepted and carried out after a thorough
          analysis and the creation of a detailed scope document, ensuring that
          our teams have a full understanding of the work that needs to be done
          and removing the possibility of project cancellation. Since Koders and
          the client understand that there is work involved to achieve every
          milestone of the project, a refund would not be possible for the work
          once assigned to us. A refund is only possible up to a certain extent on
          mutual agreement from both parties when things don't seem to be working
          for valid reasons.
        </p>
        <p>
          Client payments for custom design projects and services are made in
          increments and are non-refundable. You will receive a guarantee of a
          refund if we stop our services and they are no longer operational. If a
          project is cancelled or postponed, Koders holds all charges paid, and
          the client is responsible for all work completed beyond what was already
          paid for.
        </p>
        <p>
          We can’t guarantee a full refund for the cancellation of our services.
          But, if you change your mind after paying us for a certain service, then
          we will act only refund or cancel services according to the following
          guidelines:
          <ul>
            <li>
              Koders will refund you, in full, if a project has not started within
              30 days of making payment.
            </li>
            <li>
              In the event that information has been incorrectly provided to us by
              you, Koders does not offer any refunds or money back for services
              once work has commenced and/or has been completed.
            </li>
            <li>
              If you don’t want Koders to start the project at all, you may ask
              for a full refund within 24 hours of making payment. If the project
              has not commenced during this 24 hour period, Koders will deduct any
              expenses, charges, and admin fees incurred and refund you
              accordingly.
            </li>
            <li>
              If you commence a monthly or yearly service with us and request the
              service to be cancelled, you must notify Koders at least 30 business
              days prior to the next billing period, or unless otherwise noted in
              your Contract or Service Agreement with us.
            </li>
            <li>
              If you request a cancellation of service and your account has been
              incorrectly charged after the notice period, we will refund 100% of
              that amount.
            </li>
            <li>
              Koders does not offer any refunds for funds spent on search engines,
              for the services already delivered, or any other miscellaneous
              charges which are non-recoverable for Koders, and refunding them
              causes any loss to Koders.
            </li>
          </ul>
        </p>
        <p>
          We are eager to collaborate with you, and once we receive confirmation
          from you, we immediately take action and send your work in progress. As
          a result, if you alter your steps after confirmation, the amount you
          have already paid is non-refundable. We interact with our clients and do
          our best to answer all of their questions and begin work after their
          approval; Thus, there is no provision for a refund. We explicitly stated
          that the paid amount is non-refundable under any circumstances.
        </p>
        <p>
          The services are accessible via purchase. The prices for purchase can be
          found in the individual service descriptions and are subject to change.
          In addition to any services' fee or other charges, you agree that any
          application or transaction fees that may be in place with other service
          providers, including the gateway, may be carried over to (and collected
          and retained by) Koders, and you hereby agree that Koders may keep all
          such
        </p>
      </div>
    </PageContainer>
  );
};

export default CancellationAndRefund;
