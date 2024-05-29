// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import 'jest-extended';
import { Joueur } from '../../../src/core/Joueur';
import request from 'supertest';
import app from '../../../src/app';


let j1;
let j2;

beforeAll(async () =>{
  j1 = new Joueur("bob");
  j2 = new Joueur("karl");


});

describe('GET /api/v1/jeu/redemarrerJeu', () => {
  it('should return status 200 and JSON response', async () => {
    const response = await request(app)
      .get('/api/v1/jeu/redemarrerJeu')
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('should have no player left', () =>{
    expect(j1==null && j2==null ).toBeTruthy();
  });

});





