import { useState, useMemo, useRef, useEffect } from 'react';
import { colors } from '../../theme';
import CoursesHero from '../../components/Courses/HeroSection';
import FiltersBar from '../../components/Courses/FilterBar';
import CoursesGrid from '../../components/Courses/CoursesGrid';

const COURSES = [
  { id: 1, slug: 'human-resources-management', title: 'Human Resources Management', short: 'HRM', tag: 'orange', dur: '6 Wks', students: '1,240', rating: 4.9, level: 'Intermediate', price: '₦45,000', color: '#F97316', bg: 'linear-gradient(135deg,#FEF3C7,#FED7AA)', category: 'Management', desc: 'Master people management, recruitment, performance appraisals and HR strategy for modern organisations.' },
  { id: 2, slug: 'project-management-professional', title: 'Project Management Professional', short: 'PMP', tag: 'primary', dur: '8 Wks', students: '2,100', rating: 4.8, level: 'Advanced', price: '₦65,000', color: colors.primary.main, bg: 'linear-gradient(135deg,#DBEAFE,#BFDBFE)', category: 'Management', desc: 'Industry-recognised PMP certification prep covering agile, waterfall and hybrid project frameworks.' },
  { id: 3, slug: 'health-safety-environment-i', title: 'Health Safety & Environment I', short: 'HSE', tag: 'green', dur: '4 Wks', students: '980', rating: 4.7, level: 'Beginner', price: '₦35,000', color: colors.accent.green, bg: 'linear-gradient(135deg,#DCFCE7,#BBF7D0)', category: 'Safety', desc: 'Foundational workplace safety, hazard identification and environmental compliance principles.' },
  { id: 4, slug: 'health-safety-environment-ii', title: 'Health Safety & Environment II', short: 'HSE', tag: 'green', dur: '5 Wks', students: '740', rating: 4.8, level: 'Intermediate', price: '₦40,000', color: colors.accent.green, bg: 'linear-gradient(135deg,#DCFCE7,#D1FAE5)', category: 'Safety', desc: 'Advanced risk assessment, incident investigation, and safety management systems.' },
  { id: 5, slug: 'health-safety-environment-iii', title: 'Health Safety & Environment III', short: 'HSE', tag: 'green', dur: '6 Wks', students: '520', rating: 4.7, level: 'Advanced', price: '₦50,000', color: colors.accent.green, bg: 'linear-gradient(135deg,#A7F3D0,#BBF7D0)', category: 'Safety', desc: 'Senior-level HSE management, auditing, and regulatory compliance for complex environments.' },
  { id: 6, slug: 'customer-relations-management', title: 'Customer Relations Management', short: 'CRM', tag: 'teal', dur: '4 Wks', students: '760', rating: 4.8, level: 'Intermediate', price: '₦38,000', color: colors.accent.teal, bg: 'linear-gradient(135deg,#E0F2FE,#BAE6FD)', category: 'Business', desc: 'Build exceptional customer experiences, retention strategies and CRM system mastery.' },
  { id: 7, slug: 'business-management-professional', title: 'Business Management Professional', short: 'BMP', tag: 'purple', dur: '10 Wks', students: '1,540', rating: 4.9, level: 'Advanced', price: '₦75,000', color: colors.accent.purple, bg: 'linear-gradient(135deg,#F3E8FF,#DDD6FE)', category: 'Management', desc: 'End-to-end business strategy, operations management, financial planning and leadership.' },
  { id: 8, slug: 'entrepreneurship-management', title: 'Entrepreneurship Management', short: 'EMP', tag: 'orange', dur: '6 Wks', students: '890', rating: 4.8, level: 'Intermediate', price: '₦42,000', color: '#F97316', bg: 'linear-gradient(135deg,#FEF9C3,#FEF08A)', category: 'Business', desc: 'Launch and scale your own business — from idea validation to growth strategies and fundraising.' },
  { id: 9, slug: 'dhis2-health-informatics', title: 'DHIS2 & Health Informatics', short: 'DHI', tag: 'teal', dur: '5 Wks', students: '430', rating: 4.6, level: 'Intermediate', price: '₦40,000', color: colors.accent.teal, bg: 'linear-gradient(135deg,#CFFAFE,#A5F3FC)', category: 'Technology', desc: 'Master the District Health Information System — data entry, analysis, dashboards and reporting.' },
  { id: 10, slug: 'information-security-management', title: 'Information Security Management', short: 'ISM', tag: 'primary', dur: '7 Wks', students: '890', rating: 4.8, level: 'Advanced', price: '₦60,000', color: '#334155', bg: 'linear-gradient(135deg,#F1F5F9,#E2E8F0)', category: 'Technology', desc: 'Cybersecurity fundamentals, risk management, compliance and enterprise security architecture.' },
];

export default function CoursesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All Levels');

  const filtered = useMemo(() =>
    COURSES.filter(c =>
      (c.title.toLowerCase().includes(search.toLowerCase()) || c.short.toLowerCase().includes(search.toLowerCase())) &&
      (category === 'All' || c.category === category) &&
      (level === 'All Levels' || c.level === level)
    ), [search, category, level]);

  return (
    <>
      <CoursesHero search={search} onSearch={setSearch} />
      <FiltersBar category={category} level={level} count={filtered.length} onCategory={setCategory} onLevel={setLevel} />
      <CoursesGrid
        courses={filtered}
        search={search} category={category} level={level}
        onClear={() => { setSearch(''); setCategory('All'); setLevel('All Levels'); }}
        onClearSearch={() => setSearch('')}
        onClearCategory={() => setCategory('All')}
        onClearLevel={() => setLevel('All Levels')}
      />
    </>
  );
}