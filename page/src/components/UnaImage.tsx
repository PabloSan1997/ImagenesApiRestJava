

export function UnaImage({url, name}:Imagen) {
  return (
    <div className="slide">
        <img src={url} alt={name} />
    </div>
  );
}
