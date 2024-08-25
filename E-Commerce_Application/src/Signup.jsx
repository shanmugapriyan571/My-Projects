import React from "react";

function Signup() {
  return (
    <div class="form-container">
      <form class="register-form" action="login.php" method="post">
        <h2 class="text-white fst-normal">Login</h2>
        <div class="form-group">
          <label class="text-white" for="id">
            UserId
          </label>
          <input class="rounded-5" type="text" id="email" name="id" />
        </div>
        <div class="form-group">
          <label class="text-white" for="username">
            Username:
          </label>
          <input class="rounded-5" type="text" id="username" name="username" />
        </div>
        <div class="form-group">
          <label class="text-white" for="email">
            Email:
          </label>
          <input class="rounded-5" type="email" id="email" name="email" />
        </div>
        <div class="form-group">
          <label class="text-white" for="password">
            Password:
          </label>
          <input
            class="rounded-5"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button name="btn_save" class="rounded-5" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Signup;
