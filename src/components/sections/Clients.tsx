import { clients } from "../../data/clients";

export function Clients(): string {
  return (
    <section className="my-[60px]">
      <div className="mx-auto max-w-[1100px] px-8">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {clients.map((client) => (
            <a href={client.url || "#"} target="_blank" rel="noopener noreferrer">
              <img src={client.logo} alt={client.name} className="h-10 w-auto opacity-60 transition-opacity duration-150 hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
