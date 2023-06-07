type Navbarprops = {
  name: string;
};

export const Barnav = (props: Navbarprops) => {
  return (
    <div>
      <nav className="navbar">
        <ul>
        {/* <li className="dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown"><span className="glyphicon glyphicon-log-in"></span> Login</a>
				<div className="dropdown-menu" style="padding: 15px; padding-bottom: 10px;">
				<form class="form-horizontal"  method="post" accept-charset="UTF-8">
				  <input id="sp_uname" class="form-control login" type="text" name="sp_uname" placeholder="Username.." />
				  <input id="sp_pass" class="form-control login" type="password" name="sp_pass" placeholder="Password.."/>
				  <input class="btn btn-primary" type="submit" name="submit" value="login" />
				</form>
				</div>
			</li> */}
          {/* <li><a href="http://">Features</a></li>
          <li><a href="http://">Pricing</a></li>
          <li><a href="http://">Analytics</a></li>
          <li><a href="http://">FAQS</a></li>
          <li>
            <a href="www">Log in</a>
          </li>
          <li><a href="http://">Sign up</a></li> */}
        </ul>
      </nav>
    </div>
  );
};
