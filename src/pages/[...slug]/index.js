import HomeDecortion from '@/components/service/ HomeDecortion'
import CallToActionSection from '@/components/service/CallToActionSection'
import CeramicTilesSection from '@/components/service/CeramicTilesSection'
import Hero from '@/components/service/Hero'
import TablewareSection from '@/components/service/TablewareSection'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'


export default function ServicesPage() {
  return (
    <>
      <Header />
      <Hero />
      <HomeDecortion />
      <TablewareSection />
      <CeramicTilesSection />
      <CallToActionSection />
      <Footer />
    </>
  )
}