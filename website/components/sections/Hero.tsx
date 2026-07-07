import Button from "../ui/Button";
export default function Hero() {
  return (
    <section className="py-24">

      <h1 className="text-5xl font-bold">
        Professional Software
        <br />
        for Modern Traders
      </h1>

      <p className="mt-6 max-w-2xl">
        Transform complex trading workflows into efficient,
        data-driven systems.
      </p>

      <div className="mt-8 flex gap-4">

        <Button>
         Explore Products
        </Button>

        <Button variant="secondary">
         Learn More
        </Button>

      </div>

    </section>
  );
}