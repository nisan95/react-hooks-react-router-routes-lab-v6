import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError(); // donne l'erreur rencontrée
  return (
    <div>
      <h1>Erreur</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}