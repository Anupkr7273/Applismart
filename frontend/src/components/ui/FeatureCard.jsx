// src/components/ui/FeatureCard.jsx
export const FeatureCard = ({ icon, title, description, gradient }) => (
  <div className="group relative h-full overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
    {/* Gradient overlay */}
    <div 
      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
      aria-hidden="true"
    />
    
    <div className="relative z-10 h-full flex flex-col">
      {/* Icon with gradient background */}
      <div className={`mb-6 inline-flex items-center justify-center rounded-lg bg-gradient-to-br ${gradient} p-2 text-white w-12 h-12`}>
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-auto">{description}</p>
    </div>
  </div>
);