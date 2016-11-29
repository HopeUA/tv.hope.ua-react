import React from 'react';
import Styles from './main.scss';
import InlineSvg from 'components/InlineSvg/component';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';

import SvgAndroid from 'components/Footer/Banners/Assets/android.svg';
import SvgVolonteers from 'components/Footer/Banners/Assets/volonteers.svg';
import SvgApple from 'components/Footer/Banners/Assets/apple.svg';
import SvgDonate from 'components/Footer/Banners/Assets/donate.svg';
import ImgAndroid from 'components/Footer/Banners/Assets/android.jpg';
import ImgVolonteers from 'components/Footer/Banners/Assets/volonteers.jpg';
import ImgApple from 'components/Footer/Banners/Assets/apple.jpg';
import ImgDonate from 'components/Footer/Banners/Assets/donate.jpg';

export default function Banners() {
    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    return (
        <PixelPerfect templates={ templates } component="Banners">
            <section className={ Styles.bannersComponent }>
                <div className={ Styles.wrap }>
                    <div>
                        <img src={ ImgAndroid } alt="android"/>
                        <div>
                            <InlineSvg className={ Styles.android } content={ SvgAndroid }/>
                            <div className={ Styles.text }>
                                <span className={ Styles.row1 }>Приложения</span>
                                <span className={ Styles.row2 }>для системы</span>
                                <span className={ Styles.row3 }>ANDROID</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={ ImgVolonteers } alt="volonteers"/>
                        <div>
                            <InlineSvg className={ Styles.volonteers } content={ SvgVolonteers }/>
                            <div className={ Styles.text }>
                                <span className={ Styles.row1 }>Я очень хочу</span>
                                <span className={ Styles.row2 }>помогать как</span>
                                <span className={ Styles.row3 }>ВОЛОНТЕР</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={ ImgApple } alt="apple"/>
                        <div>
                            <InlineSvg className={ Styles.apple } content={ SvgApple }/>
                            <div className={ Styles.text }>
                                <span className={ Styles.row1 }>Приложения</span>
                                <span className={ Styles.row2 }>для системы</span>
                                <span className={ Styles.row3 }>iOS</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={ ImgDonate } alt="donate"/>
                        <div>
                            <InlineSvg className={ Styles.donate } content={ SvgDonate }/>
                            <div className={ Styles.text }>
                                <span className={ Styles.row1 }>Поддержка</span>
                                <span className={ Styles.row2 }>через проект</span>
                                <span className={ Styles.row3 }>DONATE</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={ ImgVolonteers } alt="volonteers"/>
                        <div>
                            <InlineSvg className={ Styles.volonteers } content={ SvgVolonteers }/>
                            <div className={ Styles.text }>
                                <span className={ Styles.row1 }>Я очень хочу</span>
                                <span className={ Styles.row2 }>помогать как</span>
                                <span className={ Styles.row3 }>ВОЛОНТЕР</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PixelPerfect>
    );
}
