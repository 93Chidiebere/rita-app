"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Sparkles, Music, ChevronRight, ChevronLeft, Book, Heart, Star, Target } from "lucide-react";

export default function PrayerPlayer() {
  const router = useRouter();
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

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    8: `In the Name of the Father and of the Son, etc. Amen.

"Many false prophets will arise; they will deceive many, and with the increase of lawlessness, love in most men will grow cold, but the man who stands firm to the end will be saved. (Matt. 24:11-13).

O prayerful St. Rita, if perseverance conquers great difficulties in every day life, what wonders will it not do in the spiritual life. Your courage, constancy in prayer and perseverance finally brought you to the goal of your aspirations. When you tried your possible best to enter the convent and every effort proved abortive, your three Patron Saints came to your aid.

Why did you choose Saint John the Baptist, Saint Augustine of Hippo, and Saint Nicholas of Tolentino as your Patron Saints? You chose Saint John the Baptist because his conception and yours were miraculous. Without a miraculous intervention of God, Saint John the Baptist's conception and yours could not have taken place according to human expectation. His austerity in every way was an example and a model for you to imitate.

You chose Saint Augustine because he was the founder of your order and its heavenly Patron; as he exerted his zeal against the various errors of his day and showed himself an intrepid defender of the Catholic Faith, so you exerted your zeal for helping the poor, consoling the afflicted and winning souls to God. Saint Augustine showed his humility by writing his confessions; you showed yours by obeying every order of your superior.

Finally you chose Saint Nicholas of Tolentino because of his gift of early recognition of the value of innocence which was the same as yours from your infancy.

Obtain the favour for which I am praying through the merits of these illustrious Saints together with yours. (Here mention what ever you want God to do for you through the intercession of St. Rita). Kindly obtain for me in addition to my present petition the grace of faith, hope and final perseverance through Christ our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    9: `In the Name of the Father and of the Son, etc. Amen

"It was by faith that Abraham, when put to the test, offered up Isaac. He offered to sacrifice his only son even though the promises had been made to him and he had been told: 'It is through Isaac that your name will be carried on'. He was confident that God had the power even to raise the dead; so, figuratively speaking, he was given back Isaac from the dead". (Heb. 11 : 17 - 19).

O God, Our Father, you commanded Abraham to offer Isaac his son to you and seeing his faith you did not allow him to kill the boy. For this you rewarded him abundantly by making his descendants as numerous as the sand on the seashore. St. Rita voluntarily offered her two sons to you rather than see them sin. We beg you to make Saint Rita's spiritual children increase and cover the face of the earth. Give them grace to follow the example of their Merciful Advocate Saint Rita of Cascia. Fill them with holiness and zeal for the propagation of the One, Holy, Catholic and Apostolic Faith.

Let them count no sacrifice too great for the service of God and humanity. Send your Holy Spirit into the hearts of our children so that they may not follow the devil, the world or the inclinations of their flesh. O Compassionate Saint Rita, intercede for me and obtain the grace for which I am imploring you. (Here mention whatever you want God to do for you through the intercession of St. Rita). I will do my utmost to spread devotion to you. Let peace and consolation soon be my lot through Christ Our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    10: `In the Name of the Father and of the Son, etc. Amen.

"Know this too, your kinswoman Elizabeth has, in her old age, herself conceived a son and she whom people called barren is now in her sixth month, for nothing is impossible to God". (Luke 1 : 36 - 37).

O God Almighty, our faith, hope, confidence, perseverance and resignation to your Holy Will are strengthened when we remember the fact that "nothing is impossible to you".

Saint Rita, after the death of her husband and that of her children, was then free to enter the convent, but the sisters who had never had a widow in their midst courteously refused. She was not discouraged. She concluded that she was not worthy to live among the holy nuns. She therefore redoubled her prayer, penance and perseverance. You heard her prayer in a miraculous way. One night, her Patron Saints, John the Baptist, Augustine of Hippo and Nicholas of Tolentino mentioned above on the eighth day of these prayers, appeared to her.

They told her that they would take her to the convent that night and that she should follow them. She followed them and through closed doors took her into the convent.

The Sisters saw the hand of God in her miraculous entry into their convent and allowed her to stay with them.

O Merciful God, I am most grateful to you forgiving the world the above example to show us that your almighty power begins from where ours ends. I beg you through the intercession of your miracle worker Saint Rita of Cascia to grant me the favour for which I am praying.

(Here mention your request).

I know that I am not worthy to receive any favour from you, my God, since I have on many occasions been an ungrateful servant and an unfaithful steward. That is the reason why 1 am begging your beloved Daughter Saint Rita of Cascia to obtain it for me. O God, Our kind Father, hear my prayer through Christ Our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    11: `In the Name of the Father and of the Son and, etc. Amen.

"I am the light of the world. Anyone who follows me will not be walking in the dark; he will have the light of life". (Jn. 8: 12).

O glorious Saint Rita, you gave us a good example by following Our Lord's words quoted above. Obtain for us the grace to follow Him in wealth and poverty, in sickness and in health, in want and in satisfaction until death. O God Our merciful Father, give us the grace which will enable us to say like Saint Paul:

"These are the trials through which we triumph, by the power of him who loved us. For I am certain of this: neither death nor life, no angel, no prince, nothing that exists, nothing still to come, not any power, or height or depth nor any created thing, can ever come between us and the love of God made visible in Christ Jesus Our Lord. (Romans 8.-3 7- 39).

O Admirable Saint Rita, you know how I am in such a dire need of this favour for which I am imploring God through your powerful intercession. (Here mention whatever you want God to do for you through the intercession of St. Rita). I beg you to obtain it for me but "nevertheless, let it be as you, not I would have if". Therefore I put all my aspirations in God's hands through Christ Our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    12: `In the Name of the Father and of the Son, etc. Amen.

"I am the One who reproves and disciplines all those he loves" (Rev. 3 : 10).

O Dear Saint Rita, we often ask ourselves when we are in sorrow or when we are tried, the reason why we should be so tried when we are trying to live in accordance with the commandments of God.

Well, the above quotation and your suffering as a wife, a widow, a mother and a nun, perfectly solve this problem. O mother of love, remind us always that without a cross and sorrow we cannot weave our heavenly crown. Remind us also that without these trials it is difficult to reach heaven. There is always a calm after a storm.

Obtain for us O Saint Rita, the grace to bear such trials patiently, with constancy and without grumbling.

I am expecting the favour for which I am saying these thirty-one days' prayers to you whether through a hard or an easy way as long as it is the will of God.(Here mention whatever you want God to do for you through the intercession of St. Rita). I beg you to obtain this favour for me through Christ Our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    13: `In the Name of the Father and of the Son, etc. Amen.

"From this you know that now, if you obey my voice and hold fast to my covenant you of all the nations shall be my very own for all the earth is mine" (Exodus 19: 5).

O submissive Saint Rita, God did not address the above promise to the Jews alone but to all those who obey their lawfully constituted authorities.

You gave an example of this by blindly obeying your Superior's command when she asked you to water a withered vine. God who is always faithful to His promise allowed the dry branch to burgeon, the withered vine to send forth shoots and produce grapes. This vine can still be seen in the monastery garden and is called "The Vine of Saint Rita."

These two miracles: that of the bees and that of the vine, convince me that I will obtain whatever I ask from God through your powerful intercession. I will renew the resolution I made when I began these prayers that I would say them with the proper dispositions. Let me see your powerful intercession at work on my behalf very soon and I will do my best to spread devotion to you. (Here mention whatever you want God to do for you through the intercession of St. Rita)

Console and comfort me through Christ Our Lord. Amen

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    14: `In the Name of the Father and of the Son, etc. Amen.

"Long before they call I shall answer, before they stop speaking I shall have heard". (Isaiah 65 : 24).

Beloved Saint Rita, obtain for me the gift of praying constantly as you did while you were on earth. You used to pass whole nights on the rocky heights over your town, lying on the bare stones praying until the dawn came to encroach on the splendour of your inner vision.

Your love of God and of your neighbour over-came every bodily suffering. Obtain for me the grace to follow you and be constant in prayer in this world which changes like a chameleon. Pray for me, pray with me and pray for all sinners. Console all those who pray to God through you and let their hearts' desire be granted in accordance with the holy will of God.

Moreover, I do not know how to ask for what I want from God because of my sins, but since you intercede for me I am confident that I will obtain whatever you ask Him on my behalf. (Here mention whatever you want God to do for you through the intercession of St. Rita). If my sins will stand in the way of my obtaining this favour, please obtain their forgiveness for me and I will do my best to guard against future occurrence. Help and guide me in all my endeavours and undertakings through Christ Our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    15: `In the Name of the Father and of the Son, etc. Amen.

"And a sword will pierce your own soul too so that the secret thoughts of many may be laid bare". (Luke 2: 35).

O Saint Rita, it is not without reason that you are called the "Spouse of the Crucified" because you meditated on and wept for the Passion of Our Innocent Lord and the sorrows of His Immaculate Mother so much that you had the rare privilege of sharing in them in a miraculous way. You were already in the convent for twenty-four years before Saint James delle Marche came to preach in Cascia in 1443. He preached in such a way that all who heard him were moved by his inspired words.

You were so deeply stirred when you heard his sermon on the Passion that you begged Our Lord to give you the privilege of sharing in it. A thorn then detached itself from the Crown on His Head and produced such a painful wound on your forehead that you fell to the ground.

This unique stigma made you a real Spouse of the Crucified. Give me a spark of your love of Our Lord's Passion so that my lukewarm heart may be aglow with fervour. (Here mention whatever you want God to do for you through the intercession of St. Rita). Obtain this favour for me through your love of Our Lord's Passion and through the suffering you underwent by the pain brought about by that unique stigma, through Christ Our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    16: `In the Name of the Father and of the Son, etc. Amen.

"Get up, take the Child and his mother with you, and escape into Egypt, and stay there until I tell you, because Herod intends to search for the child and do away with him". (Matt. 2: 13 - 14).

O Meditative Saint Rita, you went in imagination with Our Lord, Our Lady and Saint Joseph from Palestine to Egypt. Most authors agreed that the distance from Palestine to Egypt was three hundred miles. The only difference between your suffering and that of Our Lady, St. Joseph's and that of the Infant Jesus, is that while they suffered physically you suffered in imagination. Nevertheless, we rejoice with you and we admire your love for Our Crucified Lord. O Dear Saint Rita, obtain for me the grace to be prepared to lose everything in this world that I may gain everlasting life.

Inspire me with the love which the sermon of Saint James delle Marche inspired you and obtain for me the grace which I am asking God through your powerful intercession. (Here mention whatever you want God to do for you through the intercession of St. Rita).

Do not let me be disappointed O powerful miracle worker. I repose my confidence in you and I am convinced that my prayer will be answered. Obtain this favour for me through the sufferings and privations Our Lady, Saint Joseph and the Infant Jesus underwent on their way to, in, and from Egypt, through Christ our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    17: `In the Name of the Father and of the Son, etc. Amen.

"When they were on their way home after the feast, the boy Jesus stayed behind in Jerusalem without his parents knowing it. They assumed he was with the Caravan, and it was only after a day's journey that they went to look for him among their relations and acquaintances. When they failed to find him they went back to Jerusalem looking for him everywhere". (Luke 2.- 43 - 45).

O Saint of desperate cases, this is one of the severest sorrows our Holy Mother, the ever Blessed Virgin, underwent throughout her life. Your sorrow O courageous Saint Rita, was similar to that of the Mother of Our God. You voluntarily offered your two sons to God that they might not go to hell, but the mother of God even though she knew that her Son would later be sacrificed on the altar of the Cross for the salvation of the world, yet she was not prepared for this sudden loss. The differences between your sorrow and hers are: Our Lady stood by the bloody Body of Her son on the Cross, while you stood by the death bed of yours. She followed Her Son to the doleful theatre of His suffering and death; while you followed yours to the altar without any pain on their part. O Saint Rita the privileged Daughter of Our Lady, obtain for me the favour for which I implore God through your intercession.

Our Lord Jesus Christ will never refuse to grant any favour we ask Him through His Holy Mother Mary.

O Mary Mother of sorrow, listen to the prayer of your Beloved Saint Rita. (Here mention whatever you want God to do for you through the intercession of St. Rita).

By the merits of your Son's Passion, Death and Resurrection, give me what I want through Christ Our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    18: `In the Name of the Father and of the Son and, etc. Amen.

"All you who pass this way, look and see: is any sorrow like the sorrow that afflicts me?" (Lam. 1:12).

The fourth sorrow of Our Lady was her meeting her innocent son with the huge cross on His shoulders. O Saint Rita, you were overwhelmed with sorrow because of the anguish caused Our Lady by this meeting. Obtain for me together with the favour I am asking a horror for sin which was the cause of Our Lord's condemnation. I am ready to suffer if not physically, at least mentally with Our Lord in order to lighten Our Lady's sorrow caused by this fourth sword driven into Her Immaculate Heart.

If a woman who had a wicked son would not like him to die, what shall we say then about Our Lady whose son was good and sinless in every way. Obtain for me from Our Lord and Our Lady the grace I am asking for and I shall be ever grateful for your intercession. (Here mention whatever you want God to do for you through the intercession of St. Rita). Make me your fervent and devout child. and I will, by the grace of God, be a good child to you my good and stupendous miracle worker Saint Rita.

Let my thought, word and deed be conformable to the will of God. Count me among those for whom you pray and this will earn me eternal salvation through Christ Our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    19: `In the Name of the Father and of the Son, etc. Amen.

"There stood by the cross of Jesus His Mother". (Jn 19:25).

O sinless Mother, you stood by the cross till your son breathed His last. Women do not go near their dead children. Their love for them is so much when they are alive that if they try to look at their dead bodies the sorrow will be sufficient to kill them.

This sword, O sorrowful Mother, actually entered your Heart and came out from the other side. O humble Saint Rita, your sorrow at the death of your two sons was heart rending but that of Our Lady was still more poignant, because Her son was not only killed but he was so ill-treated that He died of indescribable agony. You had a glimpse of Our Lady's sorrow because you also suffered the loss of your sons as she did. Unite your sorrow with that of Our Mother of Sorrows to obtain this favour for me. (Here mention whatever you want God to do for you through the intercession of St. Rita).

Let the thought of this anguish serve as a deterrent from sin any time I am tempted by the devil, the flesh or the world. Obtain for me the grace to prefer Our Lord Jesus Christ and His Holy Mother to anything that can be given to me by any creature. Beg God to give me the grace to live and die with Christ. Let Christ be the answer to all my problems so that the devil may not have power over me through Christ our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    20: `In the Name of the Father and of the Son, etc. Amen.

"One of the soldiers pierced his side with a lance; and immediately there came out blood and water" (Jn. 19.-34).

O Daughter of God, Saint Rita, you who patterned your life on the Passion of our Lord and on the Seven Sorrows of Our Lady, enable us by your powerful intercession to be able to base our life on the examples laid down for us by Our Lord and His Holy Mother. Our Lady watched Her Dear Son as His side was pierced by the soldier's lance. The sacred writer told us that "there came out blood and water". O Mother of Sorrows, the Blood of Our redemption first came out from the side of Our Saviour, followed by the water of our salvation.

O kind Saint Rita, I know that Our Lady is truly and really the Mother of God and I am equally certain that a mother does not refuse to grant her son's lawful and harmless request. I implore you to ask for this favour from God for me through His and Our Mother who is full of grace. Even if Our Lord is unwilling to grant me this favour, He will do so if, and soon as His Mother asks Him. The marriage at Cana would have ended abruptly if Our Lady had not interceded on behalf of the newly weds.

O Saint Rita, I do not only believe, but I am convinced that I will get what I am asking through your powerful intercession if you ask Our Lord through His Holy Mother.

(Here mention whatever you want God to do for you through the intercession of St. Rita).

Kindly hear my humble prayer through Christ Our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    21: `In the Name of the Father and of the Son, etc. Amen.

"Pilate, astonished that He should have died so soon, summoned the centurion and enquired if He was already dead. Having been assured of this by the centurion, he granted the corpse to Joseph who brought a shroud, took Jesus down from the cross, wrapped Him in the shroud, and laid Him in a tomb which had been hewn out of the rock". (Mk. 15: 44 - 46).

The conviction that one will no longer see one's dead friend or relative is the most painful anguish brought about by death. Our Sorrowful Mother, the Ever Blessed Virgin, waited and watched everything up to this most painful and heart rending moment.

She saw the disfigured Body of Her Son. She was able to see at close quarters the rent made by the nails in His Sacred Hands and Feet. She heard the jibes of the soldiers and the blasphemies of the Jews. She saw the scars made by the cruel flogging of the executioners on the Sacred Body of Her Son.

The moment of separation finally came and Joseph of Arimathaea wrapped the Holy Remains of Our Lord in the Shroud and laid it in the sepulchre. O Mother of God this was the seventh and last sword which Your Son's Passion drove into your Immaculate Heart.

O Saint Rita, having meditated on all these sufferings of Our Lord you received your unique stigma which you kept until the day of your death. O spouse of the Crucified, as your prayer was rewarded by your stigma, so let me have what I am asking from God through your powerful intercession. (Here mention whatever you want God to do for you through the intercession of St. Rita).

Obtain this favour for me and I promise to lead a better and holier life than I have hitherto led through Christ Our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    22: `In the Name of the Father and of the Son, etc. Amen.

"Jesus answered: Have faith in God, I tell You solemnly, if anyone says to this mountain: get up and throw yourself into the sea, with no hesitation in his heart, but believing that what he says will happen, it will be done for him. 1 tell you therefore everything you ask and pray for, belief that you have it already, and it will be yours" (Mk 11: 23 - 25).

O prayerful Saint Rita, you possessed the three theological virtues of faith, hope and charity in a most extraordinary way Your childlike faith in God invariably overcame every difficulty. Your faith was like a sword and with it you cut the briars and brambles which stood in the way of prayer. God always heard your prayers while you were on earth and He hears them more now that you are reigning with Him in heaven.

Listen to my humble petition and obtain for me the gift of faith which will be my shield against every false teaching and a bright light to show me the way through this world full of errors.

I believe in God the Father Almighty, Creator of Heaven and earth, and in Jesus Christ His only Son Our Lord. Who was conceived of the Holy Ghost, born of the Virgin Mary, suffered under Pontius Pilate, was crucified dead and was buried. He descended into hell, the third day He rose again from the dead, He ascended into heaven, seated at the right-hand of God the Father Almighty. From thence He shall come to judge the living and the dead, I believe in the Holy Ghost, the Holy Catholic Church, the Communion of the Saints, the forgiveness of sin, the Resurrection of the body and life everlasting. Amen.

"I believe Lord, help my unbelief" so that I may obtain the favour for which I am begging you through the intercession of Saint Rita your faithful Daughter of Cascia.

(Here mention your request).

All these I ask you through Christ Our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    23: `In the Name of the Father and of the Son, etc. Amen.

"Patience brings perseverance and perseverance brings hope and this hope is not deceptive because the love of God has been poured into our hearts by the Holy Spirit which has been given us." (Rome 5.- 5 - 6).

O Saint Rita, you willingly gave up the transitory pleasures of this world because of the hope you had in God and in His promise of eternal salvation. You gladly suffered the loss of your sons because you hoped and you were convinced that you would meet them in heaven. Hope supported and strengthened you throughout the suffering you underwent in your unfortunate marriage. Your hope finally won the victory and your husband was not only converted but he also had the grace of gaining eternal salvation. Many other extraordinary things you accomplished while you were on earth, by your strong weapon of hope.

The devil, the world and the flesh often deceive us by illusions which efface hope from our mind. Obtain for us, O powerful Saint Rita, the grace to overcome them. Be mindful of the favour for which I implore you and console me with a quick answer.

(Here mention your request).

With hope in God, strengthened by your powerful intercession I will obtain what I went through Christ our Lord. Amen.

Say (Our Father, Hail Mary, Glory be to the Father ) thrice`,
    24: `In the Name of the Father and of the Son, etc. Amen.

"Now there remain faith, hope, charity, these three but the greatest of these is charity" (1 Cor. 13.- 13).

The third and last of the theological virtues is love. Why did Saint Paul say that the greatest of the three is love? Humanly speaking, we can answer that faith and hope end with death; for, once we see Him in whom we believe and for whom we hope, we no longer need them. The more we see God however the more we love Him for all eternity.

Come O Holy Spirit, enkindle in the hearts of the faithful the fire of your divine love and you shall renew the face of the earth. Obtain for me O powerful Saint Rita the favour which I solicit. (Here mention your request). O Almighty God, I want to pray with Saint Columbanus as follows: "I beg you, most loving Saviour, to reveal yourself to us who beseech you, so that knowing you we may love you only, love you alone, desire you alone, contemplate you alone, by day and by night, and even hold you in our thoughts; and do you deign so far to inspire us with your love, as it befits you to be loved and cherished as our God, that your charity may possess all our inward parts, and our love may know no other love apart from you who are eternal;

that such affection may be in us impossible of quenching by the many waters of this air and land and sea, according to that saying, 'Many waters are not able to quench love' which in us also can be fulfilled even in part by your gift, Our Lord Jesus Christ, to Whom is the glory unto ages of ages". Amen.

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
          onClick={() => {
            if (step === totalSteps) {
              router.push("/");
            } else {
              setStep(Math.min(totalSteps, step + 1));
            }
          }}
        >
          {step === totalSteps ? 'Finish' : 'Next'}
          <ChevronRight size={20} />
        </button>
      </div>

    </main>
  );
}
