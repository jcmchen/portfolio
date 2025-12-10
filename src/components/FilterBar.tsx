// "use client";

// type FilterBarProps = {
//   categories: { name: string; count: number }[];
//   active: string;
//   setActive: (category: string) => void;
// };

// export default function FilterBar({ categories, active, setActive }: FilterBarProps) {
//   return (
//     <div className="flex flex-wrap items-center gap-4 text-sm mb-8">
//       {categories.map((cat) => (
//         <button
//           key={cat.name}
//           onClick={() => setActive(cat.name)}
//           className={`${
//             active === cat.name ? "underline font-medium" : "text-gray-600 hover:text-black"
//           }`}
//         >
//           {cat.name}
//           <span className="ml-1 text-gray-400">{cat.count}</span>
//         </button>
//       ))}
//     </div>
//   );
// }

"use client";

type FilterBarProps = {
  categories: { name: string; count: number }[];
  active: string;
  setActive: (category: string) => void;
};

export default function FilterBar({ categories, active, setActive }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-6 text-sm mb-8">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => setActive(cat.name)}
          className={`relative ${
            active === cat.name
              ? "underline font-medium"
              : "text-gray-600 hover:text-black"
          }`}
        >
          {cat.name}
          {/* ✅ Show All 不顯示數字 */}
          {cat.name !== "Show All" && (
            <span className="absolute -top-1 -right-2 text-[11px] text-gray-400">
              {cat.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}


