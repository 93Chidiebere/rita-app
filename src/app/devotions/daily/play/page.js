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

  const date = new Date().getDate();
  const dailyPrayers = {
    1: `In the name of the Father and of the Son, etc. Amen.

"May The God of Hope Bring You Such Joy And Peace in Your Faith that the power of the Holy Spirit will remove all bounds to hope" (Rom. 15:13).

O Glorious St. Rita, you are called the Saint of the impossible and desperate cases because you were given to your pious parents after a seeming blow had been dealt against their hope of ever having children. Your birth was the reward of their childlike confidence and persevering trust in God. With joyful heart I say with the writer of the Book of Proverbs that:-

"The hope of virtuous men is all joy, the expectations of the wicked are frustrated". (Proverbs 10: 28).

I come to beg you to obtain the following favour for me (Here mention whatever you want God to do for you through the intercession of St. Rita). I know that am not worthy to receive, any favour from God since I have on many occasions transgressed His commandments. This is the reason why I come to beg you to obtain it for me. Faith urges me on, hope; strengthens me, perseverance assures me to come and ask; God for this favour through your powerful intercession.

O sympathetic Saint Rita, I am not asking you to listen to me alone, but to answer the prayer of those who implore you wherever they may be. Do not let the members of your society lag behind in anything that promotes the One, Holy, Catholic and Apostolic Church.

Obtain this favour for me as you have done and are still doing for thousands of people all over the world. I promise to give alms to the poor always and I will, by the grace of God, be your faithful and grateful child for ever. O merciful Saint Rita, remember that there are many people in the world today who are sad because they have no children. I implore you to beg God to give them children so that they may soon have the consolation which is similar to that of your parents after your birth.

Obtain these favours for us through Christ Our Lord Amen.

Say (Our Father, Hail Mary, Glory be to the Father) thrice`,
    2: `In the Name of the Father and of the Son, etc. Amen.

"The judgments of Yahweh are true, righteous, everyone, more desirable than gold, even than the finest gold. His words are sweeter than honey, even than honey that drips from the comb" (Psalm 19: 9 - 10)

O Infant Prodigy, St. Rita of Cascia, the first recorded miracle after your birth was that of the miraculous swarm of bees. Honey comes from bees and it is a sign of happiness, peace, consolation and prosperity, as the following passage shows "a land where milk and honey flow" (Joshua 5:7)

I implore you to obtain this favour for me from God.

(Here mention your request).

Fill my heart with spiritual honey of happiness, consolation, joy and gratitude by answering my prayer. Do not consider my Sins, but pity me and obtain this favour for me.

Honey never has a bitter taste, O Dear St. Rita; let bitterness never be my lot in all my undertakings. I promise to be as busy as bees in my prayer and good work and I will never allow myself to be the devil's workshop by being idle. I cannot fulfill these promises without your powerful intercession. Therefore, make my prayer efficacious before God so that He may give me what I am earnestly asking Him, through Christ our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father) thrice`,
    3: `In the Name of the Father and of the Son, etc. Amen.

"If I have all the eloquence of men or of angels but speak without love, I am simply a gong booming or a cymbal clashing" (1Cor. 13:1)

O Saint Rita, the most outstanding virtue you possessed when you were on earth was charity. This was the foundation on which all your other virtues were built. Your charity knew no barrier. It has you as the centre but its circumference embraces the whole world. The poor, the sick, the deformed, the deaf and the dumb, the needy and the sorrowful have a place of honour in your all embracing charity. The festering sores of patients were the wounds of Our Lord Jesus Christ and the offensive odor coming from them His precious Blood for you.

Let me enjoy this extraordinary charity by obtaining for me this favour for which I am begging you. (Here mention your request).

O admirable Saint Rita, if I praise your charity without imitating it I will be like a parrot, a bird that talks much but does nothing.

I will try my best to help the poor even if I cannot do as much as you did. You always saw Our Lord in them and I beg you for the grace of God to do likewise and put into my heart your burning love for the sorrowful and the afflicted and help me to have the means of helping them. Your presence was like rays of the sun in the sick room, please let my presence in hospitals and prisons be a consolation to the inmates that I may go to their souls through their bodies.

This I ask you through Christ our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    4: `In the Name of the Father and of the Son, etc. Amen.

"Praise is rightfully yours God in Zion. Vows to you must be fulfilled for you answer Prayers (Psalm 64 (65) ver 1).

O God Almighty, we whole heartedly thank you for giving us Saint Rita our Powerful Advocate. Through her intercession give us the grace to pray with faith, hope, confidence, perseverance and resignation to Your holy will.

O Powerful Wonderworker, Saint Rita, obtain for me the favour for which I am praying and I will be grateful to God and to you for the rest of my life.

(Here mention your request).

I was once like a prodigal son but I have now repented and I am prepared to follow your example of prayer. Let me have the consolation of your intercession soon. Remember that a mother does not deny her child any lawful and any harmless request. My Powerful Advocate, Saint Rita, do not hesitate to obtain this favour for me from God. People who invoke you obtain graces through your intercession all over the world; I am sure that I will not be an exception.

Count me among those who will receive your favour this month. Let me never go to the devil for the favour which I know that God alone can give me if you ask Him on my behalf.

O Dearest Saint Rita, hear and answer my prayer through Christ our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    5: `In the Name of the Father and of the Son, etc. Amen.

"Man's heart makes the plans, Yahweh gives the Answer". (Prov. 16:1)

O Humble Saint Rita, you intended to become a nun, but God had other plans for you before you reached that goal of your holy aspiration. This is an excellent lesson for us in whatever state we may be in life. We thank God for it and we are edified by your resignation to His Holy Will. Your exemplary life in the four states of wifehood, motherhood, widowhood and Sisterhood will always encourage married women, mothers, widows and nuns to persevere, endure and resign to God's holy will, until the end of the world.

You are indeed "the mystical Jewel of Umbria" as the Pope rightly called you during the process of your canonization. Obtain this favour for me that my faith may be strengthened. (Here mention whatever you want God to do for you through the intercession of St. Rita). Let me be happy by receiving the favour for which I am longing, before the end of these prayers. Answer the prayers of all those who invoke you, no matter in what state in life they may be. Convert sinners, console the sorrowful, encourage nuns and pity the dying. Lead them to their Father's house in heaven through Christ our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    6: `In the Name of the Father and of the Son, etc. Amen.

"A perfect wife, who can find her? She is far beyond the price of pearl. (Prov. 31 : 10).

O Saint Rita, the example of superhuman endurance you gave when your husband was ill-treating you was followed and is still followed by thousands of married women all over the world after many centuries. You subdued him by your prayer and patience and finally peace reigned in your home.

Obtain the gift of endurance for all married women who are now undergoing similar suffering. A broken home is the worst calamity that can befall a couple. Give married people mutual love, fidelity and forbearance.

Obtain this favour for me through the merits you gained by offering up your suffering to God. (Here mention whatever you want God to do for you through the intercession of St. Rita). Your husband's conversion brought you endless joy and consolation. Let such joy and consolation be mine before the end of these thirty-one days' prayers. Let me have peace of both soul and body. I implore you once again and I am looking forward to the day that I will obtain this favour through Christ our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    7: `In the Name of the Father and of the Son, etc. Amen.

"Happy the man who cares for the poor and the weak, if disaster strikes, Yahweh will come to his help. Yahweh will guard him, give him life and happiness in the land; ah, do not let his enemies treat him as they please. (Psalm 41 : 1- 2).

O Merciful Saint Rita, it is your ardent wish that the poor be always helped. I beg you to keep on drumming this into my ears and heart, so that their love and consolation may be greater than any other love in me. O Lover of the poor, let them always meet those who will not turn a deaf ear to their cry for help. You always distributed bread and other necessities of life to the poor when you were living with your parents, you did the same during your trying married life and you crowned all by your extraordinary charity in the convent. No beggar ever left you with a sorrowful heart. I implore you to ask God to increase both the number of benefactors and the charitable institutions to ameliorate the lot of the needy. Let them always obtain favours through your powerful intercession. Make me happy at the end of these prayers and I shall be most grateful to God who gave you such a wonderful virtue of charity.

(Here mention your request).

Your love was so great that it went beyond tribes and races. The object of your love was poverty or affliction or sadness. You replaced sorrow with joy, sadness with happiness, barrenness with prolificacy, affliction with consolation and Calvary with Tabor.

Do not turn a deaf ear to me but answer my prayer through Christ our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`
  };
  const todaysPrayer = dailyPrayers[date] || "[Prayer for today's specific date has not been added yet]";

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
      title: `3. Prayer for Date (${date})`,
      icon: Book,
      content: todaysPrayer,
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
      content: `In the Name of the Father and of the Son, etc. Amen

Lord have mercy on us.
Jesus Christ have mercy on us.
Lord have mercy on us.
Jesus Christ hear us.
Jesus Christ hear our prayer.

Heavenly Father Who is God (Have mercy on us)
Son Redeemer of the world Who is God (Have mercy on us)
Holy Spirit Who is God (Have mercy on us)
Holy Trinity one God (Have mercy on us)

Holy Mary (Pray for us)
Holy Mother of God (Pray for us)
St. Joseph (Pray for us)
St. Augustine (Pray for us)
St. Rita (Pray for us)
Noble Flower of love (Pray for us)
Helper in things despaired of (Pray for us)
Consoler of those who have lost hope (Pray for us)
Protectress of those forsaken (Pray for us)
True Advocate in all difficulties (Pray for us)
Example of obedience and doing the will of God (Pray for us)
Mirror of patience and surrendering all to God (Pray for us)
Glory of the Augustinian Order (Pray for us)
St. Rita whom a thorn from the crown on the Head of Our Lord Jesus wounded on the forehead (Pray for us St. Rita)
St. Rita whose forehead the wound adorned (Pray for us St. Rita)
St. Rita who is devoted to God in body and soul (Pray for us St. Rita)
St. Rita a powerful Advocate before our Lord (Pray for us St. Rita)
St. Rita whom innumerable miracles glorified (Pray for us St. Rita)
St. Rita whose prayer God always hears (Pray for us St. Rita)

That we may renounce our own will (Pray for us St. Rita)
That we may practise humility (Pray for us St. Rita)
That we may bear our Cross with patience (Pray for us St. Rita)
That we may love God above all things (Pray for us St. Rita)
That we may do His will daily (Pray for us St. Rita)
That we may whole heartedly forgive all enemies (Pray for us St. Rita)
That we may imitate holy examples (Pray for us St. Rita)
That we may love our neighbours as ourselves (Pray for us St. Rita)

In all our trials (Pray for us St. Rita)
In all dangers that may come our way (Pray for us St. Rita)
In our need and tribulations (Pray for us St. Rita)
In our cross and suffering (Pray for us St. Rita)
At the hour of our death (Pray for us St. Rita)

Lamb of God Who take away the sins of the world. Forgive us our sins O Lord.
Lamb of God Who take away the sins of the world. Hear our prayer O Lord.
Lamb of God Who take away the sins of the world. Have mercy on us O Lord.

+ Pray for us O St. Rita
+ That we may be made worthy of the promises of Our Lord Jesus Christ.

LET US PRAY

O God, You Whom it pleased from your infinite goodness to listen mercifully to the prayer of your servant St. Rita and to do what is humanly impossible through her intercession, have mercy on us in our heartfelt desire, help us in our need and tribulations so that everybody may know that you usually reward the humble, Defender of the abandoned and Salvation of those who repose their confidence in you. Amen.

O Glorious St. Rita You were always merciful to those who were preys of evil when you were on earth, you always consoled the sorrowful in their anguish, I am confidently awaiting good things from you now that you are in heaven. Therefore, O Powerful St. Rita, let my heart-felt desire be also your heart-felt desire, my sorrow is excessive, help me, I repose my confidence in you. Amen`,
    },
    {
      title: "8. Daily Homage to St. Rita",
      icon: Star,
      content: `In the Name of the Father and of the Son, etc. Amen

Behold me at your feet, O Glorious Wonder Worker; who extend your goodness throughout the world; I come here to pay the daily homage of my heart which knows your worth and has devotion to you. I prostrate to you the Amelioratress of things despaired of, keep me always from irreparable sin. I implore you. Remove despair which is the death of the soul from me. I praise you, Protectress of youth, who save them from the snares of the devil, infidelity and corruption. I praise you Helper in every evil that may fall to man's lot, come to my aid in all my need. My heart is overflowing with joy for your elevation, you Heroine of kindness; as the most pleasing homage to the Saints is to imitate their lives, help me to be like you in meekness, humility, holiness, patience, charity, goodness, spotlessness and without blame in all my undertakings; courage to fly from sin even if I will lose my life by so doing, I love you, O Most Powerful Protectress and I place my hope in your hands. Tell Our Lord Jesus Christ that you will see to my mistakes, put the bitterest hatred of sins into my heart; protect my body and soul like a rampart which the enemy cannot destroy. Amen.

O God, You Whom it pleased to grant St. Rita such enormous grace that she imitated You in the love she had for her enemies so that she bore the marks of your love and passion in her heart and on her forehead, by her merits and intercession make us love our enemies and make us meditate on your passion by having a perfect act of contrition in our heart. You Who live and reign from generation unto generation for ever. Amen.`,
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
