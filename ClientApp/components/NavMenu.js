import { Link } from 'react-router';

NavMenu({
  render(){
    <div class='main-nav' style="width: 255px">
        <div class='navbar navbar-inverse'>
        <div class='navbar-header'>
          <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
            <span class='sr-only'>Toggle navigation</span>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
          </button>
          <Link class='navbar-brand' to={ '/' }>JS Services - ViewModel</Link>
        </div>
        <div class='clearfix'></div>
        <div class='navbar-collapse collapse'>
          <ul class='nav navbar-nav'>
            <li>
              <Link to={ '/' } activeClassName='active'>
                <span class='glyphicon glyphicon-home'></span> Home
              </Link>
            </li>
            <li>
              <Link to={ '/mvvm' } activeClassName='active'>
                <span class='glyphicon glyphicon-education'></span> MVVM
              </Link>
            </li>
            <li>
              <Link to={ '/form' } activeClassName='active'>
                <span class='glyphicon glyphicon-education'></span> SSR Form
              </Link>
            </li>
            <li>
              <Link to={ '/deferred' } activeClassName='active'>
                <span class='glyphicon glyphicon-education'></span> Deferred Loading
              </Link>
            </li>
            <li>
              <Link to={ '/lazy' } activeClassName='active'>
                <span class='glyphicon glyphicon-education'></span> Lazy Loading
              </Link>
            </li>
            <li>
              <Link to={ '/stateonurl' } activeClassName='active'>
                <span class='glyphicon glyphicon-education'></span> State on URL
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  }
})
