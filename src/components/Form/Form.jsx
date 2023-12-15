import Input from "../Input/Input";

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
      <Input type="text" required placeholder="Insira seu nome..." />
      <Input type="email" required placeholder="Insira seu email..." />
      <button
        type="submit"
        className=" bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 dark:text-gray-200 px-10 py-2 font-bold outline-none"
      >
        Entrar
      </button>
    </form>
  );
};

export default Form;
