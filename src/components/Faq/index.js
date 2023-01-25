import "./styles.scss";

export default function Faq() {
  return (
    <div className="Faq">
      <h1 className="Faq__title">FAQ</h1>
      <h2 className="Faq__h2">A quoi ça sert ?</h2>
      <p className="Faq__paragraph">
        Cette application permet de trouver une liste de dépôts GitHub pour un
        critère donné.
      </p>
      <h2 className="Faq__h2">Comment faire une recherche ?</h2>
      <p className="Faq__paragraph">
        Sur la page recherche, complétez le champ de recherche et valider la
        recherche.
      </p>
      <h2 className="Faq__h2">Puis-je chercher n'importe quel terme ?</h2>
      <p className="Faq__paragraph">Oui, c'est fou.</p>
    </div>
  );
}
