import { useState, useMemo } from 'react';
import Card from '../Components/Card';
import Button from '../Components/Button';
import SectionHeader from '../Components/SectionHeader';
import Badge from '../Components/Badge';
import publicationsData from '../data/publications.json';

function Publication() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique years and categories
  const years = useMemo(() => {
    const uniqueYears = [...new Set(publicationsData.map(pub => pub.date))];
    return ['All', ...uniqueYears.sort().reverse()];
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(publicationsData.map(pub => pub.category))];
    return ['All', ...uniqueCategories];
  }, []);

  // Filter publications
  const filteredPublications = useMemo(() => {
    return publicationsData.filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           pub.abstract.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesYear = selectedYear === 'All' || pub.date === selectedYear;
      const matchesCategory = selectedCategory === 'All' || pub.category === selectedCategory;
      
      return matchesSearch && matchesYear && matchesCategory;
    });
  }, [searchQuery, selectedYear, selectedCategory]);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Publications" 
          subtitle="Articles and writings on development, career, and technology"
        />

        {/* Filters and Search */}
        <div className="mb-12 space-y-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-white/80 dark:bg-black/40 border border-lime-500/30 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500/50 backdrop-blur-xl transition-colors duration-300"
            />
            <svg 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lime-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-2 bg-white/80 dark:bg-black/40 border border-lime-500/30 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500/50 backdrop-blur-xl transition-colors duration-300"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm text-gray-400 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-white/80 dark:bg-black/40 border border-lime-500/30 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500/50 backdrop-blur-xl transition-colors duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Publications Grid */}
        {filteredPublications.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublications.map((publication) => (
              <Card key={publication.id} className="overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{publication.category}</Badge>
                    <span className="text-gray-500 text-sm">{publication.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-lime-400 mb-3 line-clamp-2">
                    {publication.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {publication.abstract}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      href={publication.readUrl}
                      variant="primary"
                      size="sm"
                      className="flex-1"
                    >
                      Read
                    </Button>
                    {publication.pdfUrl && (
                      <Button
                        href={publication.pdfUrl}
                        variant="secondary"
                        size="sm"
                      >
                        PDF
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No publications found matching your criteria.</p>
          </div>
        )}

        {/* See More Link */}
        <div className="text-center mt-12">
          <Button
            href="https://danielscode.hashnode.dev/"
            variant="cta"
            size="lg"
          >
            See More on Hashnode
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Publication;
