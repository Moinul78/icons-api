import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../Context/GLobalProvider';
import { useParams } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';

export default function ShowIcons() {
  const { styles, icons, inputIcons } = useContext(GlobalContext);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let filteredData = [];

    switch (id) {
      case 'classic':
        filteredData = icons.filter(icon => icon.style === 'solid' || icon.style === 'thin');
        break;
      case 'sharp':
        filteredData = icons.filter(icon => icon.style === 'regular' || icon.style === 'light');
        break;
      case 'brand':
      case 'free':
        filteredData = icons.filter(icon => icon.style === id);
        break;
      case 'solid':
      case 'regular':
      case 'thin':
      case 'light':
        filteredData = icons.filter(icon => icon.style === id);
        break;
      case 'alert':
      case 'alphabet':
      case 'communication':
      case 'business':
      case 'map':
      case 'social':
        filteredData = icons.filter(icon => icon.category === id.charAt(0).toUpperCase() + id.slice(1));
        break;
      default:
        break;
    }
    if (inputIcons.length > 0) {
      setData(inputIcons);
    } else {
      setData(filteredData);
    }
  }, [id, icons, inputIcons]);

  if (data.length === 0) return <ErrorPage />;

  return (
    <div>
      <h3 className="text-left font-medium capitalize">{id} : {data.length}</h3>

      <div className={`${styles === 'roomy' ? 'grid grid-cols-4 gap-3' : styles === 'compact' ? 'grid grid-cols-2 lg:grid-cols-5  gap-3' : 'grid grid-cols-2 lg:grid-cols-5 gap-6 text-center'}`}>
        {data.map((icon, index) => (
          <div key={index} className={`flex flex-col justify-center items-center shadow-lg hover:bg-orange-300 duration-300 ${styles === 'roomy' ? 'py-4' : 'py-2'}`}>
            <img src={icon.image} className={`${styles === 'roomy' ? 'w-12' : styles === 'compact' ? 'w-7' : 'w-10'}`}></img>
            <p className={`font-medium ${styles === 'roomy' ? 'p-4' : styles === 'compact' ? 'p-1' : 'p-2'}`}>{icon.category}</p>
          </div>
        ))}
      </div>
    </div >
  );
}