import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';


export default function ThemeToggle() {
const dispatch = useDispatch();
const dark = useSelector((state) => state.theme.dark);


return (
<button
onClick={() => dispatch(toggleTheme())}
className="ml-4 px-3 py-1 border rounded text-sm"
>
{dark ? '☀️ Light' : '🌙 Dark'}
</button>
);
}