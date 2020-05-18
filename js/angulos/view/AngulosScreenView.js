// Copyright 2020, University of Colorado Boulder

/**
 * @author Sebastian Duran
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import AngulosConstants from '../../common/AngulosConstants.js';
import angulos from '../../angulos.js';
import ProtractorNode from './ProtractorNode.js';
import Image from '../../../../scenery/js/nodes/Image.js';
import backgroundImage from '../../../images/background_png.js';
import Property from '../../../../axon/js/Property.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import MovableDragHandler from '../../../../scenery-phet/js/input/MovableDragHandler.js';

class AngulosScreenView extends ScreenView {

  /**
   * @param {AngulosModel} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem ) {

    super( {
      tandem: tandem
    } );


    const background = new Image (backgroundImage,{
      scale: 0.9,
      centerX: 450,
      centerY: 200
    });
    this.addChild(background);

    const protractorNode = new ProtractorNode( true , true, {
      scale: 0.6,
      centerX: 900,
      centerY: 100
    } );
    const protractorPosition = new Vector2( protractorNode.centerX, protractorNode.centerY );
    const protractorPositionProperty = new Property( protractorPosition );

    const protractorNodeListener = new MovableDragHandler( protractorPositionProperty );

    protractorPositionProperty.link( protractorPosition => {
      protractorNode.center = protractorPosition;
    } );

    protractorNode.addInputListener( protractorNodeListener );

    this.addChild(protractorNode);

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - AngulosConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - AngulosConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   * @public
   */
  reset() {
    //TODO
  }

  /**
   * Steps the view.
   * @param {number} dt - time step, in seconds
   * @public
   */
  step( dt ) {
    //TODO
  }
}

angulos.register( 'AngulosScreenView', AngulosScreenView );
export default AngulosScreenView;