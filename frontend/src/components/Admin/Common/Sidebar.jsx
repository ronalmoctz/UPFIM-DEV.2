import { TbMenu2, TbCalendarMonth, TbSunHigh, TbMoonStars } from "react-icons/tb";
import { IoMdColorPalette } from "react-icons/io";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Img from '../../../assets/logo-upfim.webp';
const SIDEBAR_ITEMS = [
	{ name: "Actividades", icon: TbCalendarMonth, color: "#000000", href: "/crudActividades" },
	{ name: "Talleres", icon: IoMdColorPalette, color: "#000000", href: "/crudTalleres" },
];
const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [isDarkMode, setIsDarkMode] = useState(false); 
	return (
		<motion.div
			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-64" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			<div className='h-full bg-white shadow-md p-4 flex flex-col border-r border-gray-300'>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 rounded-full hover:bg-gray-200 transition-colors max-w-fit'
				>
					<TbMenu2 size={24} style={{ color: "#000000" }} />
				</motion.button>

				<div className="flex justify-center mt-6">
					<img
						src={Img}
						alt="Logo UPFIM"
						className="w-20 h-auto mb-2"
					/>
				</div>
				<nav className='mt-8 flex-grow'>
					{SIDEBAR_ITEMS.map((item) => (
						<Link key={item.href} to={item.href}>
							<motion.div className='flex items-center  p-4 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors mb-2'>
								<item.icon size={30} style={{ color: item.color, minWidth: "20px" }} />
								<AnimatePresence>
									{isSidebarOpen && (
										<motion.span
											className='ml-4 whitespace-nowrap text-black text-xl'
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											{item.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
					))}
					<motion.div
						className='flex items-center p-4 text-xl font-medium rounded-lg hover:bg-gray-200 transition-colors mb-2 cursor-pointer'
						onClick={() => setIsDarkMode(!isDarkMode)} 
					>
						{isDarkMode ? (
							<TbMoonStars size={30} style={{ color: "#000000", minWidth: "20px" }} />
						) : (
							<TbSunHigh size={30} style={{ color: "#000000", minWidth: "20px" }} />
						)}
						<AnimatePresence>
							{isSidebarOpen && (
								<motion.span
									className='ml-4 whitespace-nowrap text-black'
									initial={{ opacity: 0, width: 0 }}
									animate={{ opacity: 1, width: "auto" }}
									exit={{ opacity: 0, width: 0 }}
									transition={{ duration: 0.2, delay: 0.3 }}
								>
									{isDarkMode ? "Dark Mode" : "Light Mode"}
								</motion.span>
							)}
						</AnimatePresence>
					</motion.div>
				</nav>
			</div>
		</motion.div>
	);
};

export default Sidebar;
