import CarGallery from '../../components/cars/carGallery/CarGallery'
import './CarPage1.scss'
import { carsData } from '../../data/carsData'
import { MdChangeCircle } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFlag } from 'react-icons/bs'



export default function CarPage() {
    const car = carsData[0]
    console.log(car)
    return (
        <div className="container" >
            <div className="carHeader">
                <div className='titleDiv'>
                    Chery Tiggo 7 Pro , 1.5 L, 2022 il, yeni
                </div>
                <div className='textAndIcon'>
                    <div className='div1'>
                      <AiOutlineHeart className='iconHeart'/>
                      <p> Seçilmişlərdə saxla</p> 
                    </div>

                    <div className='div2'>
                       <BsFlag className='iconFlag'/>
                       <p> Şikayət et</p>
                    </div>
                </div>
            </div>
            <div className='mainInfo'>
                <div className="carInfo">
                    {/* <div className='images'>
                        <img src="https://turbo.azstatic.com/uploads/full/2023%2F02%2F04%2F12%2F31%2F09%2F0ed607bd-64ee-4c84-af46-07a7a01e0e9a%2F96311_0MRsy1mdkC1py61Af6AVjA.jpg" alt="" />
                    </div> */}
                    <CarGallery images={car.images[0]} />
                    <div className='aboutCar'>
                        <div className='tables'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Seher</td>
                                        <td>Baki</td>
                                    </tr>
                                    <tr>
                                        <td>marka</td>
                                        <td>Voula</td>
                                    </tr>
                                    <tr>
                                        <td>model</td>
                                        <td>A1</td>
                                    </tr>
                                    <tr>
                                        <td>Buraxilis ili</td>
                                        <td>2023</td>
                                    </tr>
                                </tbody>
                            </table>

                            <table>
                                <tbody>
                                    <tr>
                                        <td>Seher</td>
                                        <td>Baki</td>
                                    </tr>
                                    <tr>
                                        <td>marka</td>
                                        <td>Voula</td>
                                    </tr>
                                    <tr>
                                        <td>model</td>
                                        <td>A1</td>
                                    </tr>
                                    <tr>
                                        <td>Buraxilis ili</td>
                                        <td>2023</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr />
                        <div className='describtion'>
                            EFENDİLER Motors CHERY avtomobillərin rəsmi idxalçısıdır.

                            7 İL və ya 200 000 KM ZƏMANƏT
                            -----
                            İllik 12% olmaqla 60 ay müddətinə qədər eksklüziv kredit şərtləri.
                            -----
                            • Yanacaq - Ai 92
                            • ABS+EBD
                            • BOS (Əyləcin səthə uyğun tənzimlənməsi)
                            • ESP (Elektron stabilləşdirmə sistemi)
                            • TCS (Dartı qüvvəsinə nəzarət)
                            • HAC (Yoxuşdan hərəkətə başlamaq üçün köməkçi sistem)
                            • TPMS (Təkərlərin hava təzyiginin nəzarət sistemi)
                            • Mərkəzi qapanma sistemi
                            • 2 sürüş rejimi ( ECO, Sport)
                            • İSOFİX
                            • Sürücü və sərnişin üçün hava yastıqları
                            • Sürücü və sərnişin yan hava yastıqları
                            • Arxa kamera
                            • Arxa parklanma sensorları
                            • Kruiz-kontrol
                            • Full LED faralar
                            • LED arxa stoplar
                            • LED gündüz işıqları
                            • Follow me home (Ön işıqların müşayiət funksiyası)
                            • Spoyler
                            • İnteryerin ambient işiqlanması
                            • Sükanın 4 istiqamətdə mexaniki tənzimlənməsi
                            • Sükan elektron gücləndirici ilə
                            • Dəri örtüklü multi-sükan
                            • Eynəkqabı
                            • Sürücü oturacağın 6 istiqamətdə mexaniki tənzimlənməsi
                            • Sərnişin oturacağın 4 istiqamətdə mexaniki tənzimlənməsi
                            • Güzgülərin elektron tənzimlənməsi
                            • Ekodəri oturacaqlar
                            • Klimat kontrol sistemi iki sıra deflektorlar ilə
                            • Məsafədən idarəetmə pultu（məsafədən işəsalma funksiyası ilə）
                            • Açarsız mühərriki işə salma (Start-Stop)
                            • Açarsız daxil olma (Keyless entry)
                            • Açar ilə yaxınlaşdıqda/uzaqlaşdıqda qapıların açılıb/bağlanması
                            • 18’ Yüngül lehimli disklər
                            • 225/60 R18 ölçülü şinlər
                            • Wireless Charging (Naqilsiz şarj etmə paneli)
                            • 3 USB giriş və 12V girişi
                            • 10` monitor (Bluetooth+USB+Mirror link)
                            • Android Auto, Apple Car Play
                            • 7-düymlük LCD cihazlar paneli
                            • 4 audiodinamik
                            • 475 L yükdaşıma həcmi
                        </div>
                        <hr />
                        <div className='aditionInformation'>
                            <div>ABS</div>
                        </div>
                    </div>
                </div>
                <div className="autosalonsInfo">
                    <div className='infoBox'>
                        <h2>38.000AZN</h2>
                        <div className='barter'>
                            <MdChangeCircle className='iconBarter' /> Barter
                        </div> <hr />
                        <div className='salonDiv'>
                            <img src="https://mashin.al/storage/2221114/4193bdff-2dd7-493a-bb37-d4baabcc3956.jpg" alt="" />
                            <p> Avtosalon "Premium" </p>
                        </div>

                        <button className='buttonNumber'>
                            <p className='textP'>Nömrəni göstər</p>
                            <div>
                                <BsTelephoneFill className='iconNumber' />
                                <p> (051) 232-87-70 </p>
                            </div>
                        </button>
                        <hr />
                        <div className='reklamDiv'>
                            <p>Avtosalon "Premium" - qeyri standart yanaşmamız sizi heyran edəcək!</p>
                            <p className='addReklam'>Premium və etibarlı əsl VIP şəxslərin zövqünə uyğun avtomobillərin satış məkanı.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}