import { clients } from "../../data/clients";

export function Clients(): string {
  return (
    <section className="clients">
      <div className="clients-inner">
        <div className="clients-grid">
          {clients.map((client) => (
            <a href={client.url || "#"} target="_blank" rel="noopener noreferrer">
              <img src={client.logo} alt={client.name} className="client-logo" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
