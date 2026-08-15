"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Music, ChevronRight, ChevronLeft, Book, Heart, Star, Target } from "lucide-react";

export default function PrayerPlayer() {
  const [step, setStep] = useState(1);
  const totalSteps = 8;
  const [rosaryMystery, setRosaryMystery] = useState("");

  useEffect(() => {
    const day = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    if (day === 1 || day === 6) setRosaryMystery("Joyful Mystery");
    else if (day === 2 || day === 5) setRosaryMystery("Sorrowful Mystery");
    else if (day === 3 || day === 0) setRosaryMystery("Glorious Mystery");
    else if (day === 4) setRosaryMystery("Mysteries of Light");
  }, []);

  const stepsData = [
    {
      title: "1. Say the Rosary",
      icon: Sparkles,
      content: `Please say the Rosary.\n\nToday's mystery: ${rosaryMystery}`,
    },
    {
      title: "2. Invocation to St. Rita",
      icon: Heart,
      content: `O mother Rita we your children kneel before you to pray to God through your intercession. We implore you to beg God to listen favourably to each and every one of us. We beseech you always to intercede for all those who pray to God through you that they may obtain whatever favours they stand in need of. Let us never be disgraced or put to shame whenever we call upon you. May our enemies never say "Where is your God" and thereby triumph over us. This we ask through Jesus Christ our Lord. Amen.`,
    },
    {
      title: `3. Prayer for Date (${new Date().getDate()})`,
      icon: Book,
      content: `[Prayer for today's specific date will be displayed here]`,
    },
    {
      title: "4. Daily Novena Prayer",
      icon: Target,
      content: `Almighty God, you made Saint Rita's prayer so efficacious that she is invoked in every corner of the globe. Mercifully listen to my humble petition through her powerful intercession. The news of the miracles worked by her prayers always encourage me to have recourse to her. I am most grateful for past favours. She will be my Advocate and intercessor until I die and I will do my best to be a worthy protege of such a holy protectress. Help me God to fulfill this promise in the name of Jesus Christ our Lord. Amen.`,
    },
    {
      title: "5. Daily Novena Song",
      icon: Music,
      content: `O bright Star of the Augustinian Order
Put our hearts and minds in order
That we may lead such a holy life
That after this exile we may in heaven survive.

Chorus: When human effort ends
God His grace from heaven sends
Through Saint Rita's intercession
He looks on us with compassion.

The darkness of sin and shadow of death our way obscure
But with your powerful intercession we rest assure
By your prayers we shall never wail
For God's promise will never fail.
Chorus

3. O God of power and might,
Maker of day and night,
May we your Son know,
As we pray here below
Chorus

4. Holy Rita, spouse of Christ,
Pray that we may always do what is right,
That we may heaven gain
When we are set free from sorrow and pain.
Chorus

5. Let our prayer ascend to you God our Creator,
Through the merits of St. Rita our intercessor,
Who is invoked all over the world
To obtain the favour of your Incarnate Word
Chorus

6. Praise to the Father, Son and Holy Spirit be given
Daily from morning till evening,
That we may ever be grateful
In company of all the faithful
Chorus

+ O God you mark Saint Rita your Beloved Servant out,
+ With the sign of your charity and of your Passion.`,
    },
    {
      title: "6. Concluding Novena Prayer",
      icon: Sparkles,
      content: `O God our refuge and our strength, you endowed Saint Rita with all the graces that made her so famous for her fidelity, endurance constancy and perfect example for wives, mothers, widows, and nuns. Give us grace to lead a saintly life in whatever state we may be. Let us always be conscious of your presence that we may do everything as if we see you face to face. We humbly beg you to listen to our prayer and petition through Christ our Lord. Amen.`,
    },
    {
      title: "7. Litany of Saint Rita",
      icon: Book,
      content: `[Litany of Saint Rita will be displayed here]`,
    },
    {
      title: "8. Daily Homage to St. Rita",
      icon: Star,
      content: `[Daily Homage to St. Rita will be displayed here]`,
    }
  ];

  const currentData = stepsData[step - 1] || stepsData[0];
  const Icon = currentData.icon;

  return (
    <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 144px)' }}>
      
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
        <Link href="/devotions/daily" className="btn-icon">
          <ArrowLeft size={20} />
        </Link>
        <span style={{ fontWeight: '600', color: 'var(--color-pink-900)' }}>Daily Devotion</span>
        <div style={{ width: '44px' }} /> {/* Spacer */}
      </header>

      {/* Progress */}
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: '14px', color: '#71717a', marginBottom: '8px' }}>Step {step} of {totalSteps}</p>
        <div style={{ width: '100%', height: '4px', background: 'var(--color-pink-50)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ 
            width: `${(step / totalSteps) * 100}%`, 
            height: '100%', 
            background: 'var(--color-pink-500)',
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', overflowY: 'auto', paddingBottom: '20px' }}>
        <div style={{ 
          width: '64px', 
          height: '64px', 
          background: 'var(--color-pink-50)', 
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-pink-800)',
          marginBottom: '16px',
          flexShrink: 0
        }}>
          <Icon size={24} />
        </div>
        
        <h2 style={{ fontSize: '20px', color: 'var(--color-pink-900)', fontWeight: '700', marginBottom: '16px' }}>
          {currentData.title}
        </h2>
        
        <div style={{ 
          width: '40px', 
          height: '2px', 
          background: 'var(--color-pink-100)', 
          marginBottom: '24px',
          flexShrink: 0
        }} />

        <p style={{ 
          fontSize: '16px', 
          color: 'var(--color-pink-900)', 
          lineHeight: 1.6,
          whiteSpace: 'pre-line',
          padding: '0 8px',
          textAlign: 'left',
          width: '100%'
        }}>
          {currentData.content}
        </p>
      </div>

      {/* Navigation Controls */}
      <div style={{ display: 'flex', gap: '16px', marginTop: '16px', paddingBottom: '24px' }}>
        <button 
          className="btn-primary" 
          style={{ flex: 1, background: 'var(--color-pink-50)', color: 'var(--color-pink-900)', opacity: step === 1 ? 0.5 : 1 }}
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
        >
          <ChevronLeft size={20} />
          Back
        </button>
        <button 
          className="btn-primary" 
          style={{ flex: 2 }}
          onClick={() => setStep(Math.min(totalSteps, step + 1))}
        >
          {step === totalSteps ? 'Finish' : 'Next'}
          <ChevronRight size={20} />
        </button>
      </div>

    </main>
  );
}
