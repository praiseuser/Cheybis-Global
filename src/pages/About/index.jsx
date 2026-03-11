import AboutHero from '../../components/About/HeroSection';
import StatsBand from '../../components/About/StatsBand';
import MissionSection from '../../components/About/MissionSection';
import ValuesSection from '../../components/About/ValuesSection';
import TeamSection from '../../components/About/TeamSection';
import TimelineSection from '../../components/About/TimeLineSection';
import CTAStrip from '../../components/About/CTAStrip';

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <StatsBand />
            <MissionSection />
            <ValuesSection />
            <TeamSection />
            <TimelineSection />
            <CTAStrip />
        </>
    );
}