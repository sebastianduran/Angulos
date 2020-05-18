// Copyright 2020, University of Colorado Boulder

/**
 * @author Sebastian Duran
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import angulos from '../angulos.js';
import AngulosModel from './model/AngulosModel.js';
import AngulosScreenView from './view/AngulosScreenView.js';

class AngulosScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    const options = {
      backgroundColorProperty: new Property( 'white' ),
      tandem: tandem
    };

    super(
      () => new AngulosModel( tandem.createTandem( 'model' ) ),
      model => new AngulosScreenView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

angulos.register( 'AngulosScreen', AngulosScreen );
export default AngulosScreen;