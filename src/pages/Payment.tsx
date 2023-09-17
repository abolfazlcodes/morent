import PaymentCard from "../ui/PaymentCard";

function Payment() {
  return (
    <>
      <section
        style={{
          border: "1px solid black",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "2rem",
          gap: "2rem",
        }}
      >
        <div
          style={{
            flex: "2.5",
            border: "1px solid red",
            backgroundColor: "#fff",
            borderRadius: "1rem",
            padding: "1rem",
          }}
        >
          steps
        </div>
        <PaymentCard />
      </section>
    </>
  );
}

export default Payment;
