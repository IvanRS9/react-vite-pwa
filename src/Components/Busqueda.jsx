import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Busqueda = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`https://exous.wsmprastreo.com.mx/api/v1/search/${data.search}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = await response.json();

            // Redirige a `Productos` pasando los resultados en el estado
            navigate('/productos', { state: { products: result } });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <div className="container">
                <img src="src/assets/shop-bag.svg" alt="Logo" className="w-24" />
                <br />
                <h1>Bazar Universal</h1>
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="search" className="search-input" placeholder="Buscar..." {...register("search", { required: true })} />
                    {errors.search && <span>This field is required</span>}
                    <br /><br />
                    <button type="submit" className="search-button">Buscar</button>
                </form>
            </div>
        </div>
    );
};

export default Busqueda;
