/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';

/**
 * [IS]
 * Style Import
 */
import Grids from 'theme/Grid.scss';
import Styles from './Styles/main.scss';

/**
 * [IA]
 * Assets Import
 */
import Palette from 'components/Assets/Palette';
import Sign from '../../Assets/Sign';
import Live from '../../Assets/Live';
import Uk from '../../Assets/Ukrainian';

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

function IconInfo(props) {
    const { mediaType } =  props;
    const signLanguage = BP.isPhonePortrait(mediaType) ? 'Сурдопе- рекладом' : 'Сурдоперекладом';
    const liveText = BP.isMobile(mediaType) ? 'Дивіться щотижня'
        : 'Щотижня';
    const live = BP.isPhonePortrait(mediaType) ? 'Прямі<br/>ефіри' : 'Прямі ефіри';

    return (
        <section className={ Styles.iconInfoComponent }>
            <div className={ Grids.container }>
                <div className={ Styles.container }>
                    <div className={ Styles.uk }>
                        <Uk
                            color={ Palette.tempColor36 }
                            color1={ Palette.tempColor35 }
                            color2={ Palette.tempColor37 }
                            color3={ Palette.tempColor38 }
                        />
                        <p>Якісний та оригінальний <b>Український контент</b></p>
                    </div>
                    <div className={ Styles.signLanguage }>
                        <Sign
                            color={ Palette.tempColor35 }
                            color1={ Palette.tempColor34 }
                        />
                        <p>Щодня програми з <b>{ signLanguage }</b></p>
                    </div>
                    <div className={ Styles.live }>
                        <Live
                            color={ Palette.tempColor34 }
                            color1={ Palette.tempColor35 }
                            color2={ Palette.mainColor1 }
                        />
                        <p>{ liveText } <b dangerouslySetInnerHTML={ { __html: live } }/> </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
IconInfo.propTypes = {
    mediaType: PropTypes.string.isRequired
};

/**
 * [IE]
 * Export
 */
export default IconInfo;
