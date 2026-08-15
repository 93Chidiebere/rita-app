import Link from "next/link";
import { ArrowLeft, BookOpen, Star, Info } from "lucide-react";

export default function MorePage() {
  return (
    <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '100px' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Link href="/" className="btn-icon">
          <ArrowLeft size={20} />
        </Link>
        <h1 style={{ fontSize: '24px', color: 'var(--color-pink-900)', fontWeight: '700' }}>About St. Rita</h1>
      </header>

      <section className="card" style={{ padding: '24px', background: 'var(--color-pink-50)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <Info size={24} color="var(--color-pink-800)" />
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-pink-900)' }}>Life History</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#3f3f46', lineHeight: 1.6 }}>
          <p>
            Born <strong>Margherita Lotti</strong> (1381–1457) in Roccaporena, Italy, Rita is widely known as the <em>"Saint of the Impossible"</em>. Though she felt a strong calling to religious life, her parents arranged her marriage at age 12 to Paolo Mancini.
          </p>
          <p>
            Her marriage lasted 18 years and was marked by significant hardship due to her husband's volatile temperament. She endured this with patience and prayer, eventually leading to his conversion before he was tragically murdered in a political feud.
          </p>
          <p>
            Her two sons sought revenge for their father's death, but Rita prayed fervently that they would die rather than commit murder. Both sons tragically died of illness shortly after. Now a widow and childless, Rita sought entry into the Augustinian monastery of St. Mary Magdalene in Cascia.
          </p>
          <p>
            Initially refused, she eventually gained admittance in 1413 and spent the remaining 40 years of her life in prayer, penance, and service.
          </p>
        </div>
      </section>

      <section className="card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <Star size={24} color="var(--color-pink-800)" />
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-pink-900)' }}>Miracles & Signs</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#3f3f46', lineHeight: 1.6 }}>
          
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-pink-800)', marginBottom: '4px' }}>The Bees</h3>
            <p>Shortly after her birth, it is said that white bees were seen swarming around her infant cradle, flying in and out of her mouth without harming her.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-pink-800)', marginBottom: '4px' }}>The Thorn Wound</h3>
            <p>In 1442, while praying before a crucifix, Rita reportedly received a partial stigmata—a small, painful wound on her forehead resembling a thorn from Christ's crown. This remained with her for the rest of her life.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-pink-800)', marginBottom: '4px' }}>The Winter Rose</h3>
            <p>On her deathbed, she asked a cousin to bring her a rose from her family's garden. Despite it being the dead of winter, the cousin found a single blooming rose. This is why St. Rita is frequently depicted with roses.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-pink-800)', marginBottom: '4px' }}>Incorruptibility</h3>
            <p>Following her death on May 22, 1457, her body did not decay. It remains on display in a glass reliquary at the Basilica of Saint Rita in Cascia, often emitting a sweet fragrance.</p>
          </div>

        </div>
      </section>

    </main>
  );
}
