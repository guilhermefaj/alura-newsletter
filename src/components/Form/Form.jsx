const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({ name, email });
  };

  return (
    <form
      onSubmit={safeSubmit}
      className="flex flex-col items-center justify-center h-full -mt-20 gap-6 mx-5"
    >
      <input
        type="text"
        required
        placeholder="Insira seu nome..."
        className="alura-input"
      />
      <input
        type="email"
        required
        placeholder="Insira seu email..."
        className="alura-input"
      />
      <button type="submit" className="alura-button">
        Entrar
      </button>
    </form>
  );
};

export default Form;
